# Sports Travel Platform

🚀 **Live Demo (Landing Page):**  
👉 https://sports-chi-weld.vercel.app

A full-stack **Sports Travel Booking Platform** that allows users to explore major sports events, view curated travel packages, and request custom quotes.

Built as part of a **Founding Engineer Assignment**, focusing on clean architecture, real-world deployment, and scalable design.

## 🏗️ Architecture Overview
Frontend (React + Vite)

|
| REST APIs

|
Backend (Node.js + Express)

|
|
MongoDB

## 🚀 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Jest (Testing)

### Deployment
- Backend: Render
- Frontend: Vercel / Netlify

---

## ✨ Features

- View upcoming sports events
- Featured hero event
- Dynamic pricing & packages
- Quote calculation logic
- Lead capture system
- RESTful APIs
- Static image hosting
- Fully responsive UI

---
## 🔌 Environment Variables

### Backend
     ```env
      MONGO_URI=your_mongodb_connection_string
      PORT=5000
      
  Frontend
  
      VITE_API_BASE_URL=https://your-backend-url.com
      
## ▶️ Running Locally

 **Backend**
 
      cd backend
      npm install
      npm run dev

**Frontend**

     cd frontend
     npm install
     npm run dev

## 🧪 Testing

Backend unit tests for pricing logic:

      cd backend
      npm test

## 📦 Deployment

Backend deployed on **Render**

Frontend deployed on **Vercel**

Static assets (images) are served directly from the backend.

## 🧠 Key Engineering Highlights

Modular backend architecture

Dynamic pricing rules engine

Clean API design

Cross-origin static asset handling

Frontend-backend environment decoupling
