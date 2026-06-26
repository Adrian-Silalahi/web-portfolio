import { useState } from 'react'

const projects = [
  {
    title: 'SentimenAI',
    subtitle: 'Team Lead & Fullstack Web Developer',
    period: 'Feb 2025 — Jul 2025',
    solution: 'An end-to-end NLP fine-tuning platform with automated hyperparameter tuning.',
    impact: [
      'Achieved <strong>94% classification accuracy</strong> on real-time prediction workflows, earning Grade A recognition.',
      'Led a 3-person agile team, breaking down requirements into <strong>79+ tasks</strong> ensuring on-schedule delivery.',
      'Engineered automated workflows that reduced manual data collection effort by <strong>90%+</strong>, processing <strong>37,000+</strong> training samples.',
    ],
    techs: ['React JS', 'FastAPI', 'Python', 'MongoDB', 'Trello', 'Figma'],
    images: ['/img/portfolio/afb1.webp','/img/portfolio/afb2.webp', '/img/portfolio/afb3.webp', '/img/portfolio/afb4.webp'],
    liveUrl: 'https://sentimenapp-frontend.vercel.app/',
    repoUrl: 'https://github.com/Adrian-Silalahi',
    brandColor: 'from-violet-500/10 to-transparent',
  },
  {
    title: 'Telkom Indonesia',
    subtitle: 'Fullstack Developer Intern',
    period: 'Feb 2024 — Jun 2024',
    solution: 'An internal AI Virtual Chat Assistant engineered to boost the efficiency of the Account Management team.',
    impact: [
      'Developed <strong>10 user-facing features</strong> including chat history, bookmarking, and smart recommendations.',
      'Resolved <strong>26 critical bugs</strong> with zero blocking issues during a complex V1-to-V2 platform migration.',
      'Integrated <strong>15 RESTful API endpoints</strong> for real-time conversation handling and secure data synchronization.',
    ],
    techs: ['React JS', 'Redux', 'TypeScript', 'SCSS', 'RESTful API'],
    images: ['/img/portfolio/sertifikat-magang.webp', '/img/portfolio/ciamic.png'],
    liveUrl: 'https://dev.ciamic.itdri.id/',
    repoUrl: null,
    brandColor: 'from-blue-500/10 to-transparent',
    containImage: true,
  },
  {
    title: 'Bodat Chic Sec',
    subtitle: 'Founder & Fullstack Web Developer',
    period: 'Mar 2026 — Jun 2026',
    solution: 'A full-stack e-commerce platform built to streamline online thrift shop operations.',
    impact: [
      'Engineered <strong>13 core features</strong> including secure authentication, Midtrans payment gateway, and order tracking.',
      'Built a role-protected admin dashboard with real-time analytics tracking <strong>6 key operational metrics</strong>.',
      'Integrated the <strong>RajaOngkir API</strong> for real-time shipping cost calculations across multiple courier services.',
    ],
    techs: ['Next JS', 'TypeScript', 'Tailwind', 'Node JS', 'PostgreSQL', 'Prisma', 'Supabase'],
    images: ['/img/portfolio/bodat1.webp', '/img/portfolio/bodat2.webp', '/img/portfolio/bodat3.webp', '/img/portfolio/bodat4.webp'],
    liveUrl: 'https://www.bodat-chic-sec.shop/',
    repoUrl: 'https://github.com/Adrian-Silalahi',
    brandColor: 'from-blue-500/10 to-transparent',
  },
  {
    title: 'Jagoan Soal',
    subtitle: 'FullStack AI Web Application',
    period: 'Feb 2026',
    solution: 'An AI-powered educator tool designed to eliminate manual textbook cross-referencing and lesson prep bottlenecks.',
    impact: [
      'Integrated <strong>LLaMA 3 via Groq API</strong> for curriculum-aligned question generation with a one-click Word (.docx) export.',
      'Slashed a traditional 20-minute manual handwriting process down to <strong>under 2 minutes</strong> per customized exam.',
    ],
    techs: ['Next JS', 'TypeScript', 'Tailwind', 'LLaMA 3', 'Node JS', 'MongoDB', 'Prisma'],
    images: ['/img/portfolio/jagoan1.webp','/img/portfolio/jagoan2.webp', '/img/portfolio/jagoan3.webp'],
    liveUrl: 'https://jagoan-soal-app.vercel.app/',
    repoUrl: null,
    brandColor: 'from-emerald-500/10 to-transparent',
  },
]

function ProjectCard({ project, index }) {
  const [activeImg, setActiveImg] = useState(0)
  const isEven = index % 2 === 0

  return (
    <div className={`reveal group relative flex flex-col gap-8 lg:gap-16 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      
      {/* Decorative Background Number */}
      <div className={`pointer-events-none absolute -top-10 z-0 select-none text-[180px] font-black leading-none text-slate-100/50 transition-transform duration-500 group-hover:scale-110 dark:text-slate-800/50 ${isEven ? '-right-6' : '-left-6'}`}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Browser Mockup + Image Gallery (Left/Right Side) */}
      <div className="relative z-10 w-full lg:w-1/2">
        <div className="overflow-hidden rounded-xl border-2 border-slate-200/80 bg-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-primary-500/20 dark:border-slate-700 dark:bg-slate-800">
          {/* Browser Top Bar */}
          <div className="relative flex h-10 w-full items-center gap-2 border-b border-slate-200/80 bg-slate-100 px-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="z-10 flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400 shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-amber-400 shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-green-400 shadow-sm" />
            </div>
            {/* Address Bar */}
            {!project.hideUrlBar && (
              <div className="absolute left-1/2 top-1/2 hidden h-6 w-1/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-white/60 text-[10px] font-semibold text-slate-400 shadow-inner dark:bg-slate-800/60 dark:text-slate-500 sm:flex">
                {project.liveUrl ? new URL(project.liveUrl).hostname : 'localhost:3000'}
              </div>
            )}
          </div>
          
          {/* Image Area */}
          <div className="relative aspect-video bg-slate-200 dark:bg-slate-900">
            <img
              src={project.images[activeImg]}
              alt={`${project.title} screenshot ${activeImg + 1}`}
              className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                project.containImage ? 'object-contain p-2 sm:p-4' : 'object-cover'
              }`}
              loading="lazy"
            />
            
            {/* Image dots */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeImg
                      ? 'w-6 bg-primary-500'
                      : 'w-2 bg-white/60 hover:bg-white/90 dark:bg-slate-400/60'
                  }`}
                  aria-label={`View screenshot ${i + 1}`}
                />
              ))}
            </div>

            {/* Nav arrows */}
            <button
              onClick={() => setActiveImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-600 opacity-0 shadow-md backdrop-blur-sm transition-all hover:bg-white group-hover:opacity-100 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-600 opacity-0 shadow-md backdrop-blur-sm transition-all hover:bg-white group-hover:opacity-100 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Content (Text Side) */}
      <div className="relative z-10 flex w-full flex-col lg:w-1/2">
        <h3 className="mb-1 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          {project.title}
        </h3>
        <p className="mb-2 text-lg font-bold text-primary-600 dark:text-primary-400">
          {project.subtitle}
        </p>
        <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {project.period}
        </p>

        {/* Simplified Description Block */}
        <div className="mb-8 rounded-xl border border-slate-200/60 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/50">
          <p className="mb-5 text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200">
            {project.solution}
          </p>
          <ul className="flex flex-col gap-3">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100/50 text-[10px] text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span 
                  className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 [&>strong]:text-slate-900 [&>strong]:dark:text-white"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-1 hover:bg-primary-400"
            >
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-2.5 text-sm font-bold text-slate-600 transition-all hover:-translate-y-1 hover:border-slate-800 hover:bg-slate-800 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-900"
            >
              <svg role="img" width="16" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-32 sm:py-40">
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal mb-24 text-center">
          <p className="section-heading">Projects</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Each project represents a real problem solved — from idea to deployed, production-ready product.
          </p>
        </div>

        {/* Project List */}
        <div className="mx-auto flex max-w-6xl flex-col gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
