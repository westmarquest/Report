const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const nodemailer = require("nodemailer");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");
const db = require("./config/connection");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "process.env.EMAIL_USER",
    pass: "process.env.EMAIL_PASS",
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "tapwestmarques@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));
  // app.use(express.static(path.join(__dirname, "../client/build")));
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  });
};

startApolloServer();
