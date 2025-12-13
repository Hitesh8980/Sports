const mongoose = require("mongoose");
const config = require("../config");
const { Event, Package, Lead } = require("../models");
const seedData = require("./data");

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(config.mongoUri);
    console.log("Connected.");

    console.log("Clearing existing event, package and lead data...");
    await Event.deleteMany({});
    await Package.deleteMany({});
    await Lead.deleteMany({});

    console.log("Inserting events...");
    await Event.insertMany(seedData.events);

    console.log("Inserting packages...");
    await Package.insertMany(seedData.packages);

    console.log("Inserting sample leads...");
    await Lead.insertMany(seedData.sampleLeads);

    console.log("Seed completed successfully.");
    process.exit(0);

  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
}

seed();
