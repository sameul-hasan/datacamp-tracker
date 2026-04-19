# DataCamp AI/ML Tracker — Zero to Job Ready 🚀

![DataCamp Tracker Header](./src/assets/hero.png) <!-- Update with actual screenshot if available later -->

A comprehensive, gamified 6-month learning challenge designed to take you from a Python beginner to a job-ready AI/ML Engineer. This tracker utilizes the **DataCamp Classroom** subscription (where all courses are free) and organizes a clear, day-by-day roadmap, including a final month strictly dedicated to portfolio polishing and applying.

🔗 **Live Demo:** [https://sameul-hasan.github.io/datacamp-tracker/](https://sameul-hasan.github.io/datacamp-tracker/)

---

## 🎯 Goal
To provide a highly structured, 168-day (24-week) curriculum that builds production-ready AI engineering skills, culminating in an entry-level position (targeting roles like IBM AI/ML Engineer with an average salary of $120K-$181K).

## ✨ Features

- **🗺️ Day-by-Day Roadmap:** 168 days of structured tasks, tracking exactly what to learn and when.
- **🧮 Daily Theory Supplements:** bite-sized math and theory explanations linked directly to daily practical tasks.
- **📚 31 Core Courses:** Direct links to the exact DataCamp courses needed.
- **🏆 4 Certifications Tracking:** Built-in progress tracking for the exact certifications that will help you pass ATS filters.
- **📁 4 Milestone Projects:** Detailed documentation for building real-world projects (like a full RAG pipeline) including tech stack, setup commands, dataset links, and showcase guides.
- **🎯 Interview Prep Resources:** Glassdoor-verified interview stages, LeetCode (Python/SQL) recommendations, system design guides, and mock interview platforms.
- **⭐ Gamified Progression:** Earn XP for completing days, courses, and certs. Unlock 14 different achievement badges and level up your profile locally.
- **💾 Local Persistence:** Your progress is saved automatically in your browser's local storage.

---

## 🛠️ Tech Stack

This project was engineered for speed, modularity, and a premium UX:
- **Framework:** React 19 + Vite
- **Styling:** Custom Vanilla CSS Design System (`backdrop-filter` glassmorphism, responsive CSS grid, CSS modules)
- **State Management:** Custom React Hooks (`useTracker`) with `localStorage`
- **Deployment:** Vercel (with `vercel.json` SPA routing support)
- **Typography:** Space Grotesk (Headings), Inter (Body), JetBrains Mono (Metrics & Code)

---

## 🚀 Getting Started Locally

If you want to run this tracker locally or fork it to customize your own path:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sameul-hasan/datacamp-tracker.git
   cd datacamp-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Architecture

The project has been refactored into a scalable, modular component architecture:
```
src/
├── components/          # Reusable UI components
│   ├── Layout/          # Navbars, footers, banners
│   ├── Dashboard/       # Progress overview and stat cards
│   ├── Roadmap/         # The day-by-day accordion lists
│   └── Pages/           # Standalone tab sections (Projects, Rewards, Interview, etc.)
├── data/
│   └── curriculum.js    # The "brain" — all roadmap data, resources, and theory
├── hooks/
│   └── useTracker.js    # Global state management and XP calculations
└── styles/              # Token-based CSS architecture
    ├── design-tokens.css
    ├── base.css
    ├── layout.css
    ├── components.css
    └── animations.css
```

---

## 👤 Builder

**Samuel Hasan**
- Software Engineering Student & AI/ML Engineering Enthusiast
- 📧 [sameulhasanbd@gmail.com](mailto:sameulhasanbd@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/sameulhasan/)
- 🐙 [GitHub](https://github.com/sameul-hasan)

---
*Built with ❤️ for the AI/ML community.*
