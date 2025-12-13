const { Lead, LeadStatusHistory } = require("../models");
const { canTransition } = require("../services/lead.service");

// -------------------- CREATE LEAD --------------------
async function createLead(req, res, next) {
  try {
    const lead = await Lead.create(req.body);
    return res.status(201).json(lead);
  } catch (err) {
    next(err);
  }
}

// -------------------- GET LEADS --------------------
async function getLeads(req, res, next) {
  try {
    let { page = 1, limit = 10, status, eventId, month } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const query = {};

    if (status) query.status = status;
    if (eventId) query.eventId = eventId;

    if (month) {
      // filter using createdAt month
      const monthNum = parseInt(month);
      query.$expr = {
        $eq: [{ $month: "$createdAt" }, monthNum]
      };
    }

    const leads = await Lead.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Lead.countDocuments(query);

    return res.json({
      page,
      limit,
      total,
      data: leads
    });
  } catch (err) {
    next(err);
  }
}

// -------------------- UPDATE STATUS --------------------
async function updateLeadStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { newStatus } = req.body;

    const lead = await Lead.findById(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const oldStatus = lead.status;

    // validate transition
    if (!canTransition(oldStatus, newStatus)) {
      return res.status(400).json({
        message: `Invalid status transition: ${oldStatus} → ${newStatus}`
      });
    }

    // update lead
    lead.status = newStatus;
    await lead.save();

    // save status history
    await LeadStatusHistory.create({
      leadId: id,
      from: oldStatus,
      to: newStatus,
      changedBy: "system"
    });

    return res.json({
      message: "Status updated successfully",
      lead
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus
};
