const { Projects } = require("../models");

const resolvers = {
  Query: {
    projects: async () => {
      return Projects.find();
    },

    project: async (parent, { projectId }) => {
      return Projects.findOne({ _id: projectId });
    },
  },
};

module.exports = resolvers;
