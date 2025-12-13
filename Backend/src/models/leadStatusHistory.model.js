const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeadStatusHistorySchema = new Schema({
  leadId: { type: Schema.Types.ObjectId, ref: 'Lead', required: true },

  from: { type: String, required: true },

  to: { type: String, required: true },

  changedBy: { type: String, default: 'system' },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LeadStatusHistory', LeadStatusHistorySchema);
