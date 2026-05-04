# 🌐 Adrianus Silalahi — Developer Portfolio

A modern, fully responsive personal portfolio website built with **React + Vite + Tailwind CSS**. Designed to showcase my skills, experience, and projects in a clean, professional, and recruiter-ready format.

**🔗 Live Demo:** https://web-portfolio-phi-eight.vercel.app/

<div align="center">
  <img src="public/portfolio/HeroSection.png" alt="Portfolio Preview" width="100%" />
</div>

---

## ✨ Features

- ⚡ **Blazing Fast** — Powered by Vite with optimized production builds
- 🌙 **Dark / Light Mode** — Persisted via `localStorage`, with FOUC prevention
- 📱 **Fully Responsive** — Mobile-first design that works on all screen sizes
- 🎯 **Scroll-Spy Navigation** — Active nav link updates as you scroll through sections
- 🎞️ **Scroll Reveal Animations** — Smooth section entrance via `IntersectionObserver`
- 🖼️ **Interactive Image Gallery** — Per-project carousel with dot & arrow navigation
- 🏷️ **Brand Icons** — Official SVG icons for Gmail, LinkedIn, GitHub, and WhatsApp
- 🔍 **SEO Optimized** — Meta tags, Open Graph, semantic HTML, and descriptive `<title>`

---

## 🛠️ Tech Stack

| Category       | Technology                    |
| -------------- | ----------------------------- |
| **Framework**  | React 18                      |
| **Build Tool** | Vite 6                        |
| **Styling**    | Tailwind CSS v3 + Vanilla CSS |
| **Fonts**      | Inter (Google Fonts)          |
| **Icons**      | Inline SVG (Simple Icons)     |
| **Deployment** | Vercel                        |

---

## 📂 Project Structure

```
portfolio-tailwind-css/
├── public/
│   ├── img/
│   │   ├── adrian.jpg          # Profile photo
│   │   └── portfolio/          # Project screenshots
│   └── resume.pdf              # Downloadable CV
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with scroll-spy & dark mode toggle
│   │   ├── Hero.jsx            # Landing section with CTAs & social links
│   │   ├── About.jsx           # Bio, projects summary, core stack
│   │   ├── Experience.jsx      # Professional experience (Telkom Indonesia)
│   │   ├── Projects.jsx        # Featured projects with image gallery
│   │   ├── Education.jsx       # University education & certifications
│   │   ├── Contact.jsx         # Contact cards with brand icons
│   │   └── Footer.jsx          # Footer with social links
│   ├── App.jsx                 # Root component, dark mode logic, scroll reveal
│   ├── index.css               # Global design system & utility classes
│   └── main.jsx                # React entry point
├── index.html                  # Vite HTML entry with SEO meta tags
├── tailwind.config.js          # Extended Tailwind config (colors, fonts, animations)
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm **v9+**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Adrian-Silalahi/portfolio-tailwind-css.git

# 2. Navigate to the project directory
cd portfolio-tailwind-css

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

---

## 📸 Sections Overview

| Section        | Description                                                                                |
| -------------- | ------------------------------------------------------------------------------------------ |
| **Hero**       | Intro, value proposition, CTA buttons (View Work / Download Resume), social links          |
| **About**      | Bio narrative with key projects summary, metrics, and core tech stack                      |
| **Experience** | Telkom Indonesia internship — 10 features shipped, 26 bugs resolved                        |
| **Projects**   | Bodat Chic Sec · Jagoan Soal · SentimenAI — each with Problem/Solution/Impact storytelling |
| **Education**  | Mikroskil University (Summa Cum Laude, GPA 3.86) + certifications                          |
| **Contact**    | Gmail, LinkedIn, GitHub, WhatsApp — with real brand icons                                  |

---

## 🎨 Design System

The design system is defined in `src/index.css` and `tailwind.config.js`:

- **Primary Color:** Teal (`#14B8A6`) — used for accents, CTAs, and highlights
- **Typography:** Inter (400, 500, 600, 700, 800)
- **Dark Mode:** Class-based (`dark:` prefix), toggled and persisted client-side
- **Animations:** `fadeInUp`, `float`, scroll-reveal via `IntersectionObserver`
- **Components:** `.card`, `.btn-primary`, `.btn-secondary`, `.tech-badge`, `.social-icon`

---

## 📬 Contact

- **Email:** adrianussilalahi766@gmail.com
- **LinkedIn:** [linkedin.com/in/adrianus-silalahi-511a6b296](https://www.linkedin.com/in/adrianus-silalahi-511a6b296/)
- **GitHub:** [github.com/Adrian-Silalahi](https://github.com/Adrian-Silalahi)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

> Feel free to use this as inspiration for your own portfolio — a ⭐ on the repo would be appreciated!
