const { Lead, Package, Event, Quote, LeadStatusHistory } = require("../models");
const { calculateQuote } = require("../services/pricingServices");
const { canTransition } = require("../services/lead.service");

async function generateQuote(req, res, next) {
  try {
    const { leadId, packageId, travellers = 1, bookingDate } = req.body;

    // 1. Fetch lead
    const lead = await Lead.findById(leadId);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    // 2. Fetch package
    const pkg = await Package.findById(packageId);
    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }

    // 3. Fetch event
    const event = await Event.findById(pkg.eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // 4. Calculate pricing
    const pricingResult = await calculateQuote({
      basePrice: pkg.basePrice,
      eventDate: event.startDate,
      travellers,
      bookingDate,
      includesWeekend: pkg.includesWeekend
    });

    // 5. Save quote
    const quote = await Quote.create({
      leadId,
      packageId,
      basePrice: pricingResult.basePrice,
      adjustments: pricingResult.adjustments,
      finalPrice: pricingResult.finalPrice
    });

    // 6. Update lead status → Quote Sent
    const oldStatus = lead.status;
    const newStatus = "Quote Sent";

    if (canTransition(oldStatus, newStatus)) {
      lead.status = newStatus;
      await lead.save();

      // 7. Save status history
      await LeadStatusHistory.create({
        leadId,
        from: oldStatus,
        to: newStatus,
        changedBy: "system"
      });
    }

    // 8. Response
    return res.json({
      message: "Quote generated successfully",
      quote
    });

  } catch (err) {
    next(err);
  }
}

module.exports = { generateQuote };
