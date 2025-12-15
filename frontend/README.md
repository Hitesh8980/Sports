# Sports Travel Platform – Frontend

This is the frontend application for the **Sports Travel Platform**, a web app that allows users to explore upcoming sports events, view travel packages, and request custom quotes.

The frontend is built with modern React tooling and communicates with a Node.js + Express backend via REST APIs.

---

## 🚀 Tech Stack

- **React (Vite)**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Fetch API**
- **Vercel / Netlify (Deployment)**

---

## ✨ Features

- Hero section with featured sports event
- Upcoming events grid with dynamic data
- Event packages toggle (expand/collapse)
- Quote request form
- Fully responsive design
- Optimized image rendering from backend
- Clean UI with Tailwind utility classes

---
## 🔌 Environment Variables

Create a `.env` file in the `frontend` folder:

        env
       VITE_API_BASE_URL=https://your-backend-url.com

##  ▶️ Running Locally

        cd frontend
        npm install
        npm run dev
        
  The app will be available at: 
   
       http://localhost:5173
       
## 🔗 Backend Integration

 - The frontend consumes the following backend endpoints:

 - GET /api/events

 - GET /api/events/:eventId/packages

 - POST /api/leads

 - Static images served from /images/*

## 📦 Deployment

The frontend can be deployed using:

 - Vercel (Recommended)

- -Netlify

