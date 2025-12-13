# Sports Event Booking Backend

This is a Node.js + Express backend application for managing sports event bookings, pricing quotes, and lead tracking.

The system allows users to:
- Browse events and packages
- Generate dynamic price quotes
- Track lead status and history
- Apply complex pricing rules

---

## 🛠 Tech Stack

- Node.js (JavaScript)
- Express.js
- MongoDB
- Mongoose
- Jest (Testing)

---

## 🚀 Setup & Run

### 1️⃣ Install dependencies
      
     npm install

### 2️⃣ Configure environment

Create a .env file:

    PORT=4000
    MONGO_URI=mongodb://localhost:27017/sports_booking
    
### 3️⃣ Seed database 
     npm run seed
### 4️⃣ Start server     
     npm run dev
 Health check:
 
     GET /health
     
# 🧾 Pricing Logic

The quote pricing engine applies multiple rules:

### 1. Seasonal Pricing

+20% for events in June–August

### 2. Early Bird Discount

−10% if booking is 60+ days before event

### 3. Last-Minute Surcharge

+25% if booking is within 15 days of event

### 4. Group Discount

−8% if travellers ≥ 4

### 5. Weekend Surcharge

+8% if package includes weekend stay

All adjustments are calculated per person and then multiplied by traveller count.   

# 🔌 API Endpoints

Events

    GET /api/events
    GET /api/events/:id/packages
    
Leads
    POST /api/leads
    GET /api/leads
    GET /api/leads/:id

Quotes

    POST /api/quotes/generate
    
Sample request: 

    {
    "leadId": "LEAD_ID",
    "packageId": "PACKAGE_ID",
    "travellers": 2,
    "bookingDate": "2024-01-01"
    }

# 🧪 Testing

Unit tests are written using Jest.

Run tests:

       npm test
       
Covered:

Pricing logic

Seasonal, early bird, group, and weekend rules       
    
    
    
    

