const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// placeholder routers (we will create these in later tasks)
router.use("/leads", require("../routes/lead.routes"));
router.use("/events", require("../routes/event.routes"));
router.use("/quotes", require("../routes/quotes.route"));



router.get('/health', async (req, res) => {
  const uptime = process.uptime();
  const dbState = mongoose.connection.readyState; // 0 disconnected, 1 connected ...
  res.json({
    status: 'ok',
    uptime,
    dbState
  });
});

module.exports = router;
