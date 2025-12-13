const mongoose = require('mongoose');
const { Schema } = mongoose;

const PackageSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },

  name: { type: String, required: true },

  basePrice: { type: Number, required: true },

  details: { type: String },

  includesWeekend: { type: Boolean, default: false } 
});

module.exports = mongoose.model('Package', PackageSchema);
