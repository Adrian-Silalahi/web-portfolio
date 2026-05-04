function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-200/20 blur-3xl dark:bg-primary-500/10" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-teal-200/20 blur-3xl dark:bg-teal-500/10" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800/50 dark:bg-primary-900/20 dark:text-primary-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              Available for opportunities
            </div>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm{' '}
              <span className="gradient-text">Adrianus Silalahi</span>
            </h1>

            <p className="mb-8 text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
              I build{' '}
              <span className="font-semibold text-slate-900 dark:text-white">scalable web applications</span>{' '}
              with React &amp; Next.js — turning complex problems into clean, performant digital solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
              {/* Social icons row */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Adrian-Silalahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <svg role="img" width="16" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/adrianus-silalahi-511a6b296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <svg role="img" width="16" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-400/20 to-teal-400/20 blur-2xl dark:from-primary-500/10 dark:to-teal-500/10" />
              <img
                src="/img/adrian.jpg"
                alt="Adrianus Silalahi"
                className="relative h-64 w-64 rounded-full border-4 border-white/50 object-cover shadow-2xl dark:border-slate-700/50 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -right-4 top-8 animate-float rounded-xl border border-slate-200/60 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-dark-50/90">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">⚡ React &amp; Next.js</span>
            </div>
            <div className="absolute -left-4 bottom-12 animate-float rounded-xl border border-slate-200/60 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-dark-50/90" style={{ animationDelay: '2s' }}>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">🎓 Summa Cum Laude</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-slate-400">Scroll down</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
