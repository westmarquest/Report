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
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });

  app.use("/graphql", expressMiddleware(server));

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

// Call the async function to start the server
startApolloServer();
