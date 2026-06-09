import { useState } from 'react'

// ─── Data ──────────────────────────────────────────────────────────────────

const entries = [
  {
    type: 'project',
    title: 'SentimenAI',
    location: 'Medan, Indonesia',
    role: 'Team Lead & Fullstack Web Developer',
    company: 'SentimenAI.app',
    period: 'Feb 2025 – Jul 2025',
    problem: 'Analyzing public sentiment from social media at scale requires complex NLP pipelines that are inaccessible to non-technical users.',
    solution: 'Built an end-to-end web platform integrating automated scraping, data cleaning, AI model training (RoBERTa), and real-time prediction through an intuitive UI.',
    bullets: [
      'Engineered end-to-end NLP fine-tuning platform with automated hyperparameter tuning, achieving 94% classification accuracy on real-time prediction workflows using React.js, FastAPI, and Python, earning Grade A recognition.',
      'Led 3-person cross-functional team using agile methodology, breaking down faculty requirements into 79+ tasks managed via Trello, ensuring on-schedule delivery.',
      'Engineered automated data collection and preprocessing workflows reducing manual effort by 90%+, processing 37,000+ training samples using Python, BeautifulSoup, and Pandas.',
    ],
    techs: ['React JS', 'SCSS', 'Python', 'FastAPI', 'MongoDB', 'Trello', 'Figma'],
    images: ['/img/portfolio/afb1.webp', '/img/portfolio/afb2.webp', '/img/portfolio/afb3.webp', '/img/portfolio/afb4.webp'],
    liveUrl: 'https://sentimenapp-frontend.vercel.app/',
  },
  {
    type: 'work',
    title: 'Telkom Indonesia',
    location: 'Jakarta, Indonesia',
    role: 'Fullstack Developer Intern',
    company: 'Telkom Indonesia',
    period: 'Feb 2024 – Jun 2024',
    description: 'Contributed to the development and quality assurance of an internal AI Virtual Chat Assistant designed to support the Account Management team in boosting sales performance.',
    bullets: [
      'Engineered 10 user-facing features including chat history, bookmarking, and smart recommendations for internal AI chatbot platform using React.js, Redux, TypeScript, and SCSS.',
      'Conducted manual QA and regression testing during V1-to-V2 migration, identifying and resolving 26 critical bugs including broken registration flow and mobile UI inconsistencies, ensuring production deployment with zero blocking issues.',
      'Integrated 15 RESTful API endpoints for real-time conversation handling and secure data synchronization.',
      'Authored comprehensive technical documentation detailing bug root-cause analysis and system architecture, facilitating seamless knowledge transfer to incoming developers.',
    ],
    techs: ['React JS', 'Redux', 'TypeScript', 'SCSS', 'RESTful API', 'GitLab CI/CD'],
  },
  {
    type: 'project',
    title: 'Jagoan Soal',
    location: 'Medan, Indonesia',
    role: 'FullStack Web Application',
    company: 'Jagoansoal.app',
    period: 'Apr 2026',
    problem: 'Educators struggle to generate varied, high-quality practice questions that align with specific curricula and learning objectives.',
    solution: 'Developed a user-friendly exam generator that eliminated prompt engineering complexity and enabled non-technical users to create questions across 12 grade levels with a single click.',
    bullets: [
      'Architected and deployed a fullstack AI application using Next.js, TypeScript, and MongoDB (Prisma) designed to eliminate manual textbook cross-referencing and lesson prep bottlenecks for traditional educators.',
      'Integrated LLaMA 3 via Groq API for curriculum-aligned question generation and engineered a one-click Word (.docx) export pipeline optimized for non-tech users.',
      'Reduced quiz formulation and curation time by 90%, slashing a traditional 20-minute manual handwriting process down to under 2 minutes per customized exam.',
    ],
    techs: ['Next JS', 'TypeScript', 'Tailwind', 'LLaMA 3', 'Node JS', 'MongoDB', 'Prisma'],
    images: ['/img/portfolio/jagoan1.webp', '/img/portfolio/jagoan2.webp', '/img/portfolio/jagoan3.webp'],
    liveUrl: 'https://jagoan-soal-app.vercel.app/',
  },
  {
    type: 'project',
    title: 'Bodat Chic Sec',
    location: 'Medan, Indonesia',
    role: 'Founder & Fullstack Web Developer',
    company: 'bodat-chic-sec.shop',
    period: 'Jul 2023 – Sep 2023',
    problem: 'My thrift store needed a dedicated platform beyond marketplace apps to build a stronger brand identity and control the customer experience end-to-end.',
    solution: 'Built a responsive, full-stack e-commerce platform with real-time cart, admin dashboard, authentication, and payment integration — from scratch.',
    bullets: [
      'Engineered fullstack e-commerce platform with 9 core features (JWT authentication, Stripe payments, shopping cart, checkout flow, order management) enabling online thrift shop operations using Next.js, Tailwind, Redux, TypeScript, Node.js, and MongoDB.',
      'Built admin dashboard streamlining product catalog and inventory management through real-time analytics tracking 5 key business metrics (orders, revenue, users, inventory, payment status).',
      'Deployed production-ready application on Vercel with automated CI/CD pipeline, ensuring seamless updates and reliable performance.',
    ],
    techs: ['Next JS', 'TypeScript', 'Tailwind', 'Node JS', 'MongoDB', 'Prisma'],
    images: ['/img/portfolio/bodat1.webp', '/img/portfolio/bodat2.webp', '/img/portfolio/bodat3.webp', '/img/portfolio/bodat4.webp'],
    liveUrl: 'https://bodat-chic-sec.vercel.app/',
  },
]

// ─── Image Gallery (for project entries) ──────────────────────────────────

function ImageGallery({ images, title }) {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
      <img
        src={images[activeImg]}
        alt={`${title} screenshot ${activeImg + 1}`}
        className="h-full w-full object-cover transition-all duration-500"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeImg ? 'w-6 bg-primary-500' : 'w-2 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`View screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setActiveImg((p) => (p === 0 ? images.length - 1 : p - 1))}
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-600 shadow-md transition hover:bg-white dark:bg-slate-800/80 dark:text-slate-300"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setActiveImg((p) => (p === images.length - 1 ? 0 : p + 1))}
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-600 shadow-md transition hover:bg-white dark:bg-slate-800/80 dark:text-slate-300"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}

// ─── Entry Card ───────────────────────────────────────────────────────────

function EntryCard({ entry, index }) {
  const isWork = entry.type === 'work'

  return (
    <div className="reveal relative flex gap-5 sm:gap-8">
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-lg ring-4 ring-white dark:ring-dark ${
            isWork
              ? 'bg-blue-100 dark:bg-blue-900/30'
              : 'bg-primary-100 dark:bg-primary-900/30'
          }`}
        >
          {isWork ? '💼' : '🚀'}
        </div>
        {index < entries.length - 1 && (
          <div className="mt-3 w-0.5 flex-1 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700" />
        )}
      </div>

      {/* Card */}
      <div className="card mb-10 flex-1 overflow-hidden p-0">
        {/* Header */}
        <div className="border-b border-slate-200/60 px-6 py-5 dark:border-slate-700/60 sm:px-7">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                isWork
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                  : 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300'
              }`}
            >
              {isWork ? 'Work Experience' : 'Personal Project'}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">{entry.period}</span>
            <span className="hidden text-xs text-slate-300 dark:text-slate-600 sm:block">·</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">{entry.location}</span>
          </div>

          <h3 className="mb-0.5 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            {entry.title}
          </h3>
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
            {entry.role}
            <span className="font-normal text-slate-400 dark:text-slate-500"> · {entry.company}</span>
          </p>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6 sm:px-7">
          {/* Image gallery for projects */}
          {entry.images && (
            <ImageGallery images={entry.images} title={entry.title} />
          )}

          {/* Description (work) or Problem/Solution (project) */}
          {isWork ? (
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {entry.description}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-dark-50/60">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  The Problem
                </p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {entry.problem}
                </p>
              </div>
              <div className="rounded-lg bg-primary-50/60 p-4 dark:bg-primary-900/10">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-primary-400 dark:text-primary-500">
                  My Solution
                </p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {entry.solution}
                </p>
              </div>
            </div>
          )}

          {/* Bullet achievements */}
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Key Contributions
            </p>
            <ul className="space-y-2.5">
              {entry.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {entry.techs.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>

          {/* Live demo link */}
          {entry.liveUrl && (
            <div>
              <a
                href={entry.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                Live Demo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────

function ProjectExperience() {
  return (
    <section id="experience" className="bg-slate-100/50 py-24 dark:bg-dark-50/50 sm:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="section-heading">Projects & Experience</p>
          <h2 className="section-title">What I've Built & Where I've Worked</h2>
          <p className="section-subtitle mx-auto">
            From leading academic NLP research to shipping features at enterprise scale — every entry is a real problem solved and a real product shipped.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-4xl">
          {entries.map((entry, i) => (
            <EntryCard key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectExperience
