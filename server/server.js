const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");
const mongoose = require("mongoose");
const db = require("./config/connection");

// mongoose
//   .connect("mongodb://localhost:27017/myprojectdatabase", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// app.post("/send", (req, res) => {
//   const { name, email, message } = req.body;

//   // Set up nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   // Set up email options
//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER,
//     subject: `Message from ${name}`,
//     text: message,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send("Email sent: " + info.response);
//   });
// });

// app.get("/marques", (req, res) => {
//   res.send("Hello World");
// });
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("/", (req, res) => {
    res.redirect("/marques");
  });

  // Define a catch-all route that serves the main HTML file
  app.get("/marques", (req, res) => {
    // Send the main HTML file of the React app
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });

  app.use("/graphql", expressMiddleware(server));

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

// Call the async function to start the server
startApolloServer();
