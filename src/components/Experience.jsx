const achievements = [
  {
    icon: '⚙️',
    text: 'Engineered 10 new production features during a V1 → V2 migration of an internal AI chatbot platform — including chat bookmarks, notification modals, and smart question recommendations.',
  },
  {
    icon: '🐛',
    text: 'Resolved 26 critical bugs with zero blocking issues in production, backed by in-depth technical documentation and root cause analysis.',
  },
]

const techs = ['React JS', 'TypeScript', 'SCSS', 'RESTful API', 'Node JS', 'Prisma', 'PostgreSQL']

function Experience() {
  return (
    <section id="experience" className="bg-slate-100/50 py-32 dark:bg-dark-50/50 sm:py-40">
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="section-heading">Experience</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            Enterprise-scale engineering — shipping features, squashing bugs, and delivering quality in production.
          </p>
        </div>

        {/* Timeline Card */}
        <div className="reveal mx-auto max-w-3xl">
          <div className="relative flex gap-6">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg ring-4 ring-white dark:bg-primary-900/30 dark:ring-dark-50/50">
                💼
              </div>
              <div className="mt-3 w-0.5 flex-1 bg-gradient-to-b from-primary-300 to-transparent dark:from-primary-700" />
            </div>

            {/* Card Body */}
            <div className="card mb-8 flex-1 overflow-hidden p-0">
              {/* Header Bar */}
              <div className="border-b border-slate-200/60 px-6 py-5 dark:border-slate-700/60 sm:px-8">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Feb 2024 — Jun 2024 · 4 Months
                </span>
                <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  Full-Stack Web Developer Intern
                </h3>
                <p className="text-base font-semibold text-primary-600 dark:text-primary-400">
                  Telkom Indonesia
                </p>
              </div>

              {/* Body */}
              <div className="px-6 py-6 sm:px-8">
                <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Contributed to the development and quality assurance of an internal{' '}
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    AI Virtual Chat Assistant
                  </span>{' '}
                  designed to support the Account Management team in boosting sales performance.
                </p>

                {/* Achievements */}
                <ul className="mb-6 space-y-3">
                  {achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-0.5 flex-shrink-0 text-base leading-none">{item.icon}</span>
                      <span className="leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
