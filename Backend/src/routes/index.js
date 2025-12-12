const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// placeholder routers (we will create these in later tasks)
router.use('/leads', (req, res, next) => {
  // temporary 501 for now
  return res.status(501).json({ message: 'Leads routes not implemented yet' });
});
router.use('/events', (req, res, next) => {
  return res.status(501).json({ message: 'Events routes not implemented yet' });
});
router.use('/quotes', (req, res, next) => {
  return res.status(501).json({ message: 'Quotes routes not implemented yet' });
});

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
