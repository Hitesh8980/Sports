const express = require("express");
const router = express.Router();

const {
  getEvents,
  getPackagesByEvent
} = require("../controllers/event.controller");

// GET /api/events
router.get("/", getEvents);

// GET /api/events/:id/packages
router.get("/:id/packages", getPackagesByEvent);

module.exports = router;
