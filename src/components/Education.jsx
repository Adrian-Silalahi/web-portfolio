const certificates = [
  {
    title: 'Fullstack Web Development: MERN Stack',
    issuer: 'WPU Course',
    year: 'May 2026',
    image: '/img/portfolio/sertifikat-wpu.webp',
    url: 'https://learn.wpucourse.id/certificate/W9I3Y79L',
    accent: 'bg-emerald-500',
    borderAccent: 'border-emerald-500/30',
  },
  {
    title: 'Meta Android Development',
    issuer: 'Meta / Coursera',
    year: 'Sep 2023',
    image: '/img/portfolio/sertifikat2.webp',
    url: 'https://coursera.org/share/36f0dee2ee3897554c2e05c05b4380bb',
    accent: 'bg-blue-500',
    borderAccent: 'border-blue-500/30',
  },
  {
    title: 'Huawei HCIA-AI V3.0',
    issuer: 'Huawei',
    year: 'Jul 2023',
    image: '/img/portfolio/sertifikat6.webp',
    url: null,
    accent: 'bg-red-500',
    borderAccent: 'border-red-500/30',
  },
  {
    title: 'IBM Cloud Development',
    issuer: 'IBM / edX',
    year: 'Jun 2022',
    image: '/img/portfolio/sertifikat1.webp',
    url: 'https://courses.edx.org/certificates/4eac6dcfd84f4f37a9f332242fb48af4',
    accent: 'bg-blue-600',
    borderAccent: 'border-blue-600/30',
  },
]

const relevantCourses = [
  'Front-End Web Dev', 'Back-End Web Dev', 'OOP & Design Patterns',
  'Database Modeling', 'Agile Development', 'Data Structures'
]

function Education() {
  return (
    <section id="education" className="bg-slate-50 py-32 dark:bg-slate-900 sm:py-40 relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply dark:mix-blend-screen" style={{ backgroundImage: 'radial-gradient(var(--tw-colors-slate-200) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="reveal mb-20 text-center">
          <p className="section-heading">Education & Credentials</p>
          <h2 className="section-title">Academic Highlights</h2>
          <p className="section-subtitle mx-auto">
            Strong Computer Science foundation backed by continuous learning and industry-recognized credentials.
          </p>
        </div>

        {/* University Card */}
        <div className="reveal mb-16">
          <div className="relative mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-slate-800 dark:shadow-none sm:p-8 lg:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              
              {/* Image — asymmetrical styled frame with rotation */}
              <div className="relative mx-auto w-full max-w-sm shrink-0 lg:w-2/5">
                <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gradient-to-tr from-primary-200 to-teal-100 opacity-70 blur-xl dark:from-primary-900 dark:to-teal-900" />
                <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-2xl border-8 border-white bg-slate-100 shadow-xl transition-transform duration-500 hover:rotate-0 hover:scale-105 dark:border-slate-700 dark:bg-slate-800">
                  <img
                    src="/img/portfolio/education1.webp"
                    alt="Universitas Mikroskil Graduation"
                    className="h-full w-full object-cover object-[center_10%]"
                    loading="lazy"
                  />
                  {/* Graduate Badge overlay */}
                  <div className="absolute bottom-4 right-4 rounded-xl bg-white/90 p-2 shadow-lg backdrop-blur-sm dark:bg-slate-900/90">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    2021 — 2025
                  </span>
                  <span className="text-sm font-bold text-slate-400">•</span>
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Universitas Mikroskil</span>
                </div>
                
                <h3 className="mb-6 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                  Bachelor of Computer Science
                </h3>

                {/* GPA Card — sparkle glow */}
                <div className="mb-8 inline-flex items-center gap-5 rounded-2xl border border-primary-100 bg-gradient-to-r from-primary-50 to-white p-5 shadow-sm dark:border-primary-900/50 dark:from-primary-900/10 dark:to-slate-800">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Final GPA</p>
                    <p className="text-3xl font-black text-primary-600 dark:text-primary-400">3.86 <span className="text-lg font-bold text-slate-300 dark:text-slate-600">/4.00</span></p>
                  </div>
                  <div className="h-12 w-px bg-slate-200 dark:bg-slate-700" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 animate-pulse text-amber-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-extrabold text-amber-600 dark:text-amber-500">Summa Cum Laude</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500">Highest Honors</p>
                  </div>
                </div>

                {/* Relevant Courses */}
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relevantCourses.map((course) => (
                      <span key={course} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="reveal">
          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Professional Certifications
            </h3>
            <div className="hidden h-px flex-1 bg-slate-200 ml-6 dark:bg-slate-700 sm:block" />
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border ${cert.borderAccent} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 dark:bg-slate-800`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Accent line top */}
                <div className={`absolute left-0 top-0 h-1 w-full ${cert.accent} opacity-80`} />
                
                {/* Issuer & Year */}
                <div className="mb-4 flex h-10 items-start justify-between gap-2">
                  <div className="flex items-start gap-2 pt-0.5">
                    <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${cert.accent}`} />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 line-clamp-2 dark:text-slate-400">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h4 className="mb-4 h-12 text-base font-extrabold leading-snug text-slate-900 line-clamp-2 dark:text-white">
                  {cert.title}
                </h4>

                {/* Certificate Image */}
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/50 transition-all duration-300 group-hover:border-primary-100 dark:group-hover:border-primary-900/50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Link */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 transition-colors group-hover:text-primary-500 dark:text-primary-400 dark:group-hover:text-primary-300"
                    >
                      View Credential
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verified Offline
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
