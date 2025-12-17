# 🚀 Full-Stack Developer Portfolio (Next.js + MERN + CMS)

A modern, scalable, and fully dynamic **full-stack portfolio application** built with **Next.js** and the **MERN ecosystem**, designed to showcase frontend engineering, backend architecture, and real-world content management skills.

This project is **not a static portfolio**. It includes a secure **Admin Dashboard (CMS)** that allows all content to be updated dynamically without modifying code.

---

## ✨ Features

### 🌐 Public Portfolio

* Responsive, mobile-first UI
* Dark & Light theme toggle 🌙☀️
* Projects showcase with pagination / lazy loading
* Skills visualization with proficiency levels
* SEO-friendly pages (Next.js App Router)
* Clean, modern UI with Tailwind CSS
* Rich footer with social media links

### 🔐 Admin Dashboard (CMS)

* Secure admin authentication (JWT)
* Create, update, delete:

  * Projects
  * Skills
  * Profile content
* MongoDB-powered dynamic content
* Pagination for large datasets
* Role-based access control

---

## 🧱 Tech Stack

### Frontend

* **Next.js (App Router)**
* React.js
* Tailwind CSS (Dark & Light Themes)
* Zustand (Global State Management)
* Axios (Centralized API services)

### Backend

* Next.js API Routes
* Node.js
* RESTful API architecture
* JWT Authentication

### Database

* MongoDB Atlas
* Mongoose ODM

---

## 📂 Project Structure

```txt
portfolio/
├── app/                    # Next.js App Router
│   ├── (public)/           # Public pages
│   ├── admin/              # Admin dashboard (CMS)
│   ├── api/                # Backend API routes
│   └── layout.jsx
│
├── components/             # Reusable UI components
├── services/               # Centralized API calls (Axios)
├── store/                  # Zustand global state
├── models/                 # Mongoose schemas
├── lib/                    # DB connection & middleware
├── styles/                 # Global styles
│
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🗃️ Data Models

* **Projects** – title, description, tech stack, links, images
* **Skills** – name, category, proficiency level
* **Users** – admin authentication
* **Contacts** – messages sent from the portfolio

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## ▶️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit:

* Portfolio: `http://localhost:3000`
* Admin Dashboard: `http://localhost:3000/admin`

---

## 🎯 Why This Project Matters

* Demonstrates **real CMS experience**
* Shows **full-stack architecture skills**
* Uses **production-ready patterns**
* Highlights **Next.js, React, and backend integration**
* Scales beyond a simple portfolio

---

## 📌 Author

Built by a **Full-Stack Developer** with strong experience in **React, Next.js, Node.js, MongoDB**, and modern UI/UX practices.

---

⭐ If you find this project useful, feel free to star the repository.
