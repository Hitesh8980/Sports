function getSeasonalMultiplier(eventDate) {
  const month = eventDate.getMonth() + 1; // 1-12

  if ([6, 7, 12].includes(month)) return 0.20; // Peak
  if ([4, 5, 9].includes(month)) return 0.10; // Mid

  return 0; // Off-season
}

function isEarlyBird(eventDate, bookingDate) {
  const diffDays = Math.ceil((eventDate - bookingDate) / (1000 * 60 * 60 * 24));
  return diffDays >= 120;
}

function isLastMinute(eventDate, bookingDate) {
  const diffDays = Math.ceil((eventDate - bookingDate) / (1000 * 60 * 60 * 24));
  return diffDays < 15;
}

async function calculateQuote({
  basePrice,
  eventDate,
  travellers = 1,
  bookingDate = new Date(),
  includesWeekend = false
}) {
  const adjustments = [];
  const eventD = new Date(eventDate);
  const bookingD = new Date(bookingDate);

  let total = basePrice;

  // 1) Seasonal Multiplier
  const seasonal = getSeasonalMultiplier(eventD);
  if (seasonal > 0) {
    const amount = basePrice * seasonal;
    adjustments.push({ name: "Seasonal Pricing", amount });
    total += amount;
  }

  // 2) Early Bird Discount
  if (isEarlyBird(eventD, bookingD)) {
    const amount = -(basePrice * 0.10);
    adjustments.push({ name: "Early Bird Discount", amount });
    total += amount;
  }

  // 3) Last-Minute Surcharge
  if (isLastMinute(eventD, bookingD)) {
    const amount = basePrice * 0.25;
    adjustments.push({ name: "Last Minute Surcharge", amount });
    total += amount;
  }

  // 4) Group Discount
  if (travellers >= 4) {
    const amount = -(basePrice * 0.08);
    adjustments.push({ name: "Group Discount", amount });
    total += amount;
  }

  // 5) Weekend Surcharge
  if (includesWeekend) {
    const amount = basePrice * 0.08;
    adjustments.push({ name: "Weekend Surcharge", amount });
    total += amount;
  }

  // Final Price (for entire group)
  const finalPrice = total * travellers;

  return {
    basePrice,
    adjustments,
    finalPrice
  };
}

module.exports = {
  calculateQuote,
  getSeasonalMultiplier,
  isEarlyBird,
  isLastMinute
};
