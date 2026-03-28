# Ganesh Choudhary — L2 DevOps Portfolio

A modern, dark-themed portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

🌐 **Live:** https://jaatxog.github.io/gc-portfolio/

## 🚀 Local Development

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

## 🌍 Deploy to GitHub Pages

### One-time setup:
1. Push this repo to GitHub as `ganesh-portfolio`
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Push to `main` — the workflow auto-deploys!

### ⚙️ If your repo name differs:
Edit `vite.config.js` and change:
```js
base: '/YOUR-REPO-NAME/',
```

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx          ← Typing animation + Live stats widget
│   ├── Terminal.jsx      ← Interactive terminal (whoami, skills, etc.)
│   ├── About.jsx
│   ├── Skills.jsx        ← Animated skill bars
│   ├── Experience.jsx    ← Timeline
│   ├── Projects.jsx      ← Project cards
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolio.js      ← ✏️ Edit your info here
├── App.jsx
├── index.css
└── main.jsx
```

## ✏️ Customise

All your personal data lives in **`src/data/portfolio.js`** — edit that file to update skills, projects, experience, certifications, and contact info.
