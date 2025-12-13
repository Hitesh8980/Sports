const { calculateQuote } = require("../services/pricingServices");

describe("Pricing Service - calculateQuote", () => {

  test("applies seasonal pricing with early bird discount", async () => {
    const result = await calculateQuote({
      basePrice: 10000,
      eventDate: "2025-07-10",
      travellers: 1,
      bookingDate: "2024-01-01"
    });

    expect(result.finalPrice).toBe(11000);
  });

  test("applies group discount with early bird", async () => {
    const result = await calculateQuote({
      basePrice: 10000,
      eventDate: "2025-03-10",
      travellers: 4,
      bookingDate: "2024-01-01"
    });

    expect(result.finalPrice).toBe(32800);
  });

  test("applies weekend surcharge with early bird", async () => {
    const result = await calculateQuote({
      basePrice: 10000,
      eventDate: "2025-03-10",
      travellers: 1,
      includesWeekend: true,
      bookingDate: "2024-01-01"
    });

    expect(result.finalPrice).toBe(9800);
  });

  test("combines all pricing rules correctly", async () => {
    const result = await calculateQuote({
      basePrice: 20000,
      eventDate: "2025-07-15",
      travellers: 4,
      includesWeekend: true,
      bookingDate: "2024-01-01"
    });

    expect(result.finalPrice).toBe(88000);
  });

});
