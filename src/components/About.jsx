const projects = [
  {
    emoji: '🔹',
    name: 'SentimenAI',
    highlight: '94% classification accuracy',
    description2: ', cutting manual effort by ',
    highlight2: '90%+',
    description3: ' across 37,000+ training samples.',
  },
  {
    emoji: '🔹',
    name: 'Jagoan Soal',
    highlight: '12 grade levels',
    description2: ' auto-generated with a single click using Gemini AI.',
    highlight2: '',
    description3: '',
  },
  {
    emoji: '🔹',
    name: 'Bodat Chic Sec',
    highlight: '9 core functionalities',
    description2: ' — JWT auth, cart, checkout, and live admin dashboard.',
    highlight2: '',
    description3: '',
  },
]

const coreStack = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js',
  'FastAPI', 'Python', 'PostgreSQL', 'MongoDB',
]

const stats = [
  { value: '3.86', label: 'GPA', sublabel: 'Summa Cum Laude', icon: '🎓' },
  { value: '4+', label: 'Projects Shipped', sublabel: 'Production-ready', icon: '🚀' },
  { value: '10+', label: 'Features at Telkom', sublabel: 'Enterprise scale', icon: '💼' },
]

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="section-heading">About Me</p>
          <h2 className="section-title">My Story</h2>
          <p className="section-subtitle mx-auto">
            A developer who doesn't just write code — I ship products that solve real problems.
          </p>
        </div>

        <div className="reveal mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">

          {/* Intro */}
          <p>
            I'm <span className="font-semibold text-slate-900 dark:text-white">Adrianus</span> — a Fullstack
            Developer and{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">Summa Cum Laude</span>{' '}
            Informatics graduate from Mikroskil University{' '}
            <span className="text-slate-500 dark:text-slate-400">(GPA 3.86/4.00)</span>, with a strong passion
            for building web products that actually solve real problems.
            Beyond college, I completed a{' '}
            <span className="font-semibold text-slate-900 dark:text-white">4-month internship</span>{' '}
            at{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">Telkom Indonesia</span>{' '}
            — engineering 10 new features and resolving 26 critical bugs in production.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 !mt-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="reveal flex flex-col items-center rounded-2xl border border-slate-200/60 bg-slate-50/80 p-4 text-center dark:border-slate-700/60 dark:bg-dark-50/80"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="mb-1 text-2xl">{stat.icon}</span>
                <p className="text-2xl font-extrabold text-primary-600 dark:text-primary-400">{stat.value}</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">{stat.label}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>

          {/* Shipped Projects */}
          <div>
            <p className="mb-5 text-slate-700 dark:text-slate-200">
              Throughout college, I didn't just study — I{' '}
              <span className="font-semibold text-slate-900 dark:text-white">shipped</span>:
            </p>

            <div className="space-y-3">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="reveal flex gap-3 rounded-xl border border-slate-200/60 bg-slate-50/50 px-4 py-3 dark:border-slate-700/60 dark:bg-dark-50/50"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <span className="mt-0.5 flex-shrink-0 text-lg">{project.emoji}</span>
                  <p>
                    <span className="font-bold text-slate-900 dark:text-white">{project.name}</span>
                    {' — '}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      {project.highlight}
                    </span>
                    {project.description2}
                    {project.highlight2 && (
                      <span className="font-semibold text-primary-600 dark:text-primary-400">
                        {project.highlight2}
                      </span>
                    )}
                    {project.description3}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Stack */}
          <div className="!mt-8 rounded-xl border border-slate-200/60 bg-slate-50/50 p-5 dark:border-slate-700/60 dark:bg-dark-50/50">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <p className="!mt-6 text-slate-500 dark:text-slate-400">
            Currently open to{' '}
            <span className="font-semibold text-slate-900 dark:text-white">full-time Fullstack Developer</span>{' '}
            opportunities and open to relocation.{' '}
            <a
              href="#contact"
              className="font-semibold text-primary-600 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
            >
              Let's connect! 🤝
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
