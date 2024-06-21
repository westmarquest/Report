// backend/graphql/typeDefs.js
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Projects {
    _id: ID!
    name: String
    image: String
  }

  type Query {
    projects: [Projects]
    project(projectId: ID!): Projects
  }
`;

module.exports = typeDefs;
