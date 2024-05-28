const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
});

const Projects = model("Projects", projectSchema);

module.exports = Projects;
