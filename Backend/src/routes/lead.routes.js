const express = require("express");
const router = express.Router();

const {
  createLead,
  getLeads,
  updateLeadStatus
} = require("../controllers/lead.controller");

// POST /api/leads
router.post("/", createLead);

// GET /api/leads
router.get("/", getLeads);

// PATCH /api/leads/:id/status
router.patch("/:id/status", updateLeadStatus);

module.exports = router;
