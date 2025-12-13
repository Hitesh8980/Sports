const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  title: { type: String, required: true },

  startDate: { type: Date, required: true },

  endDate: { type: Date, required: true },

  imageUrl: { type: String },

  description: { type: String }
});

module.exports = mongoose.model('Event', EventSchema);
