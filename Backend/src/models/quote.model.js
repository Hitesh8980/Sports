const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuoteSchema = new Schema({
  leadId: { type: Schema.Types.ObjectId, ref: 'Lead', required: true },

  packageId: { type: Schema.Types.ObjectId, ref: 'Package', required: true },

  basePrice: { type: Number, required: true },

  adjustments: [
    {
      name: String,
      amount: Number
    }
  ],

  finalPrice: { type: Number, required: true },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', QuoteSchema);
