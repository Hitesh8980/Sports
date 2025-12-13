const express = require("express");
const router = express.Router();

const { generateQuote } = require("../controllers/quotes.controller");

// POST /api/quotes/generate
router.post("/generate", generateQuote);

module.exports = router;
