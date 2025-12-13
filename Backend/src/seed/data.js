module.exports = {
  events: [
    {
      _id: "675a1f0a1c9d440000000001",
      title: "IPL Final 2025",
      startDate: "2025-05-26",
      endDate: "2025-05-26",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zrJ6yNvTvqR1s_1qaPPjR7FWT4VzE4SGhQ&s",
      description: "The biggest cricket final of IPL season."
    },
    {
      _id: "675a1f0a1c9d440000000002",
      title: "Wimbledon Finals 2025",
      startDate: "2025-07-14",
      endDate: "2025-07-15",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkG7WSAY0hABGnnCdReiG9-0IU9DUYb5Kpw&s", 
      description: "Grand slam tennis finals in London."
    },
    {
      _id: "675a1f0a1c9d440000000003",
      title: "F1 Abu Dhabi GP 2025",
      startDate: "2025-12-07",
      endDate: "2025-12-07",
      imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202512/abu-dhabi-gp-073024583-1x1.jpg?VersionId=42oQBeoQJGPW7Zgd0JHuMhboc7jZsbIR",
      description: "Final race of the Formula 1 2025 season."
    }
  ],

  packages: [
    {
      eventId: "675a1f0a1c9d440000000001",
      name: "Standard Package",
      basePrice: 25000,
      details: "Match ticket + standard hotel",
      includesWeekend: false
    },
    {
      eventId: "675a1f0a1c9d440000000001",
      name: "Premium Package",
      basePrice: 45000,
      details: "VIP ticket + 4-star hotel",
      includesWeekend: true
    },

    {
      eventId: "675a1f0a1c9d440000000002",
      name: "Center Court Package",
      basePrice: 60000,
      details: "Center court + hotel",
      includesWeekend: false
    },
    {
      eventId: "675a1f0a1c9d440000000002",
      name: "VIP Wimbledon Experience",
      basePrice: 90000,
     details: "VIP seating, player lounge access",
      includesWeekend: true
    },

    {
      eventId: "675a1f0a1c9d440000000003",
      name: "Race Day Package",
      basePrice: 70000,
      details: "Grandstand + hotel",
      includesWeekend: false
    },
    {
      eventId: "675a1f0a1c9d440000000003",
      name: "F1 Premium Experience",
      basePrice: 120000,
      details: "Pit access + 5-star hotel",
      includesWeekend: true
    }
  ],

  sampleLeads: [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1111111111",
      message: "Looking for IPL Final tickets",
      eventId: "675a1f0a1c9d440000000001",
      status: "New"
    }
  ]
};
