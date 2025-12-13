const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeadSchema = new Schema({
  name: { type: String, required: true },

  email: { type: String, required: true },

  phone: { type: String, required: true },

  message: { type: String },

  eventId: { type: Schema.Types.ObjectId, ref: 'Event' },

  status: {
    type: String,
    enum: ['New', 'Contacted', 'Quote Sent', 'Interested', 'Closed Won', 'Closed Lost'],
    default: 'New'
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
