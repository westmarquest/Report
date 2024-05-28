// server/seeders/seed.js
const db = require("../config/connection");
const { Projects } = require("../models");
const projectSeeds = require("./projectsSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Projects", "projects");

    await Projects.create(projectSeeds);

    console.log("All done!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding projects:", err.message);
    process.exit(1);
  }
});
