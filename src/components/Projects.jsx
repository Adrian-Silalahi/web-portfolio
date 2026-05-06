import { useState } from 'react'

const projects = [
  {
    title: 'Bodat Chic Sec',
    subtitle: 'Full-Stack E-Commerce Platform',
    period: 'Apr 2026 — Present',
    problem: 'My thrift store needed a dedicated platform beyond marketplace apps to build a stronger brand identity and control the customer experience end-to-end.',
    solution: 'Built a responsive, full-stack e-commerce platform with real-time cart, admin dashboard, authentication, and payment integration — from scratch.',
    impact: [
      'Implemented 9 core features including auth flow and streamlined checkout.',
      'Designed 5 data models with Prisma for type-safe database operations.',
      'Built a private admin dashboard tracking 6 key store metrics in real-time.',
    ],
    techs: ['Next JS', 'TypeScript', 'Tailwind', 'Node JS', 'MongoDB', 'Prisma'],
    images: ['/img/portfolio/bodat1.webp', '/img/portfolio/bodat2.webp', '/img/portfolio/bodat3.webp', '/img/portfolio/bodat4.webp'],
    liveUrl: 'https://bodat-chic-sec.vercel.app/',
  },
  {
    title: 'Jagoan Soal',
    subtitle: 'AI-powered tool to generate questions',
    period: 'Mar 2026',
    problem: 'Educators struggle to generate varied, high-quality practice questions that align with specific curricula and learning objectives.',
    solution: 'Developed a user-friendly exam generator that eliminated prompt engineering complexity and enabled non-technical users to create questions across 12 grade levels with a single click.',
    impact: [
      'Eliminated prompt engineering complexity for educators.',
    ],
    techs: ['Next JS', 'TypeScript', 'Tailwind', 'LLaMA 3', "Node JS", "MongoDB", "Prisma"],
    images: ['/img/portfolio/jagoan1.webp','/img/portfolio/jagoan2.webp', '/img/portfolio/jagoan3.webp'],
    liveUrl: "https://jagoan-soal-app.vercel.app/",
  },
  {
    title: 'SentimenAI',
    subtitle: 'AI Sentiment Analysis Platform',
    period: 'Feb 2025 — Jul 2025',
    problem: 'Analyzing public sentiment from social media at scale requires complex NLP pipelines that are inaccessible to non-technical users.',
    solution: 'Built an end-to-end web platform integrating automated scraping, data cleaning, AI model training (RoBERTa), and real-time prediction through an intuitive UI.',
    impact: [
      'Developed 18 RESTful API endpoints for real-time sentiment predictions.',
      'Designed 31 interactive UI screens in Figma and translated them into code.',
      'Led an agile team of 3, managing 79+ backlog items across the full development cycle.',
      'Achieved Grade "A" on the final thesis evaluation.',
    ],
    techs: ['React JS', 'SCSS', 'Python', 'FastAPI', 'MongoDB', 'Trello', 'Figma'],
    images: ['/img/portfolio/afb1.webp','/img/portfolio/afb2.webp', '/img/portfolio/afb3.webp', '/img/portfolio/afb4.webp'],
    liveUrl: "https://sentimenapp-frontend.vercel.app/",
  },
]

function ProjectCard({ project, index }) {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="card card-hover reveal overflow-hidden p-0 flex flex-col">
      {/* Project Number */}
      <div className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/90 text-xs font-extrabold text-white shadow-md backdrop-blur-sm">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Image Gallery */}
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.images[activeImg]}
          alt={`${project.title} screenshot ${activeImg + 1}`}
          className="h-full w-full object-cover transition-all duration-500"
          loading="lazy"
        />

        {/* Gradient overlay on bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Image dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeImg
                  ? 'w-6 bg-primary-500'
                  : 'w-2 bg-white/60 hover:bg-white/80 dark:bg-slate-400/60'
              }`}
              aria-label={`View screenshot ${i + 1}`}
            />
          ))}
        </div>

        {/* Nav arrows */}
        <button
          onClick={() => setActiveImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
          className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-600 shadow-md transition-all hover:bg-white dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          onClick={() => setActiveImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-600 shadow-md transition-all hover:bg-white dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <h3 className="mb-0.5 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mb-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
          {project.subtitle}
        </p>
        <p className="mb-4 text-xs text-slate-400 dark:text-slate-500">{project.period}</p>

        {/* Problem → Solution → Impact */}
        <div className="mb-6 space-y-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              The Problem
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              My Solution
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.solution}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Key Results
            </p>
            <ul className="space-y-1.5">
              {project.impact.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-0.5 flex-shrink-0 text-primary-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              Source Code
              <svg role="img" width="14" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="section-heading">Projects</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Each project represents a real problem solved — from idea to deployed, production-ready product.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
