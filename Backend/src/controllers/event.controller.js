const { Event, Package } = require("../models");

// -------------------- GET ALL EVENTS --------------------
async function getEvents(req, res, next) {
  try {
    const events = await Event.find().sort({ startDate: 1 });
    return res.json(events);
  } catch (err) {
    next(err);
  }
}

// -------------------- GET PACKAGES BY EVENT --------------------
async function getPackagesByEvent(req, res, next) {
  try {
    const { id } = req.params;

    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const packages = await Package.find({ eventId: id });

    return res.json({
      event,
      packages
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getEvents,
  getPackagesByEvent
};
