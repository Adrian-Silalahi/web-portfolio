import { useState, useEffect } from 'react'

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background decorations — enhanced mesh gradient + dot grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-primary-300/20 blur-[100px] dark:bg-primary-600/20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-300/20 blur-[100px] dark:bg-blue-600/20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[30%] left-[20%] h-[500px] w-[500px] rounded-full bg-teal-200/30 blur-[100px] dark:bg-teal-800/20 mix-blend-multiply dark:mix-blend-screen" />
        {/* Dot grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary-200/50 bg-primary-50/80 px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-sm backdrop-blur-sm dark:border-primary-800/50 dark:bg-primary-900/30 dark:text-primary-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </div>

            <h2 className="mb-2 text-xl font-bold tracking-wide text-slate-500 dark:text-slate-400 sm:text-2xl">
              Fullstack Developer &middot; React &amp; Next.js
            </h2>
            <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <br className="hidden lg:block" />
              <span className="gradient-text leading-tight">Adrianus Silalahi</span>
            </h1>

            {/* Static Subtitle for instant readability */}
            <p className="mb-8 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
              I build scalable web applications with React &amp; Next.js — turning complex problems into clean, performant digital solutions.<br className="mb-2 block" />
              <span className="font-semibold text-slate-900 dark:text-white">1+ year of hands-on development experience</span> including production-level work at Telkom Indonesia.
            </p>



            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:bg-primary-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:-translate-y-1 active:scale-[0.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300/80 bg-transparent px-7 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50/50 hover:-translate-y-1 active:scale-[0.98] dark:border-slate-600 dark:text-slate-300 dark:hover:border-primary-400 dark:hover:text-primary-400 dark:hover:bg-primary-900/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
              {/* Social icons row */}
              <div className="ml-2 flex items-center gap-3">
                <a
                  href="https://github.com/Adrian-Silalahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200/80 text-slate-500 transition-all duration-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-900"
                  aria-label="GitHub"
                >
                  <svg role="img" width="18" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/adrianus-silalahi-511a6b296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200/80 text-slate-500 transition-all duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:text-slate-400 dark:hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg role="img" width="18" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 flex-shrink-0 lg:mt-0">
            <div className="relative">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-400/40 to-blue-400/40 blur-2xl dark:from-primary-500/20 dark:to-blue-500/20" />
              
              {/* Double ring border & image container */}
              <div className="relative rounded-[2rem] border-[6px] border-white/50 bg-white/20 p-2 shadow-2xl backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/20">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/img/adrian.jpg"
                    alt="Adrianus Silalahi"
                    className="h-64 w-64 object-cover transition-transform duration-700 hover:scale-105 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -right-8 top-12 animate-float rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-800/90 dark:shadow-black/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6h7a1 1 0 000-2h-7a1 1 0 000 2z"/>
                    <path d="M11 7h2v6h-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500">Tech Stack</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">React &amp; Next.js</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -left-10 bottom-16 animate-float rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-800/90 dark:shadow-black/50" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-500 dark:bg-amber-900/30 dark:text-amber-400">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500">Graduation</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Summa Cum Laude</p>
                </div>
              </div>
            </div>
            
            {/* Third floating badge */}
            <div className="absolute -bottom-6 right-6 animate-float rounded-2xl border border-white/60 bg-white/90 px-4 py-2 shadow-xl backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-800/90 dark:shadow-black/50" style={{ animationDelay: '4s' }}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Open to Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-bounce flex-col items-center gap-2 lg:flex">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Scroll</span>
          <div className="flex h-8 w-5 justify-center rounded-full border-2 border-slate-300 dark:border-slate-600">
            <div className="mt-1.5 h-2 w-1.5 rounded-full bg-slate-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
