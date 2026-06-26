import { useState, useEffect, useRef } from 'react'

// Simple count up hook
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(easeProgress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return { count, ref }
}



const coreStackCategories = {
  Frontend: [
    { name: 'React', color: 'text-sky-500', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
    { name: 'Next.js', color: 'text-slate-900 dark:text-white', bg: 'bg-slate-900/10 dark:bg-white/10', border: 'border-slate-900/20 dark:border-white/20' },
    { name: 'Tailwind CSS', color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
  ],
  Backend: [
    { name: 'Node.js', color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { name: 'FastAPI', color: 'text-teal-500', bg: 'bg-teal-500/10', border: 'border-teal-500/20' },
    { name: 'Python', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  ],
  Database: [
    { name: 'PostgreSQL', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { name: 'MongoDB', color: 'text-green-600', bg: 'bg-green-600/10', border: 'border-green-600/20' },
    { name: 'Prisma', color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  ],
  Tools: [
    { name: 'TypeScript', color: 'text-blue-600', bg: 'bg-blue-600/10', border: 'border-blue-600/20' },
    { name: 'Git', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { name: 'Figma', color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
  ]
}

function StatCard({ end, suffix = '', label, sublabel, icon, delay }) {
  const { count, ref } = useCountUp(end, 2000)
  
  return (
    <div
      ref={ref}
      className="reveal flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white/50 p-6 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/50"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-2xl shadow-inner dark:bg-primary-900/30">
        {icon}
      </div>
      <div className="mb-1 flex items-baseline gap-0.5">
        <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
          {end === 3.86 ? '3.86' : count}
        </p>
        <span className="text-xl font-bold text-primary-500">{suffix}</span>
      </div>
      <p className="mb-0.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
      <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">{sublabel}</p>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-32 sm:py-40 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl dark:bg-primary-900/10 pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="section-heading">About Me</p>
          <h2 className="section-title">My Story</h2>
          <p className="section-subtitle mx-auto">
            A developer who doesn't just write code — I ship products that solve real problems.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-12">

          {/* Intro */}
          <div className="reveal space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            <p>
              I'm <span className="font-bold text-slate-900 dark:text-white">Adrianus</span> — a Fullstack
              Developer and{' '}
              <span className="font-bold text-primary-600 dark:text-primary-400">Summa Cum Laude</span>{' '}
              Informatics graduate from Mikroskil University, with a strong passion
              for building web products that actually solve real problems.
            </p>
            <p>
              Beyond college, I completed a{' '}
              <span className="font-bold text-slate-900 dark:text-white">4-month internship</span>{' '}
              at{' '}
              <span className="font-bold text-primary-600 dark:text-primary-400">Telkom Indonesia</span>{' '}
              — engineering 10 new features and resolving 26 critical bugs in production.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Currently open to <span className="font-semibold text-slate-900 dark:text-white">full-time Fullstack Developer</span> opportunities and open to relocation.{' '}
              <a
                href="#contact"
                className="font-semibold text-primary-600 underline decoration-primary-300 underline-offset-4 transition-colors hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300"
              >
                Let's connect! 🤝
              </a>
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard end={3.86} label="GPA" sublabel="Summa Cum Laude" icon="🎓" delay={100} />
            <StatCard end={10} suffix="+" label="Features Shipped" sublabel="At Telkom" icon="💼" delay={200} />
            <StatCard end={4} suffix="+" label="Projects Built" sublabel="Production-ready" icon="🚀" delay={300} />
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />



          {/* Core Stack */}
          <div className="reveal">
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Core Stack
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(coreStackCategories).map(([category, techs]) => (
                <div key={category} className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-5 dark:border-slate-700/60 dark:bg-slate-800/50">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech.name}
                        className={`inline-flex items-center rounded-full border ${tech.border} ${tech.bg} px-3 py-1 text-xs font-bold ${tech.color} transition-transform hover:scale-105`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
