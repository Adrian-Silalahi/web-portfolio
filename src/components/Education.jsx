const certificates = [
   {
    title: 'Fullstack Web Development: MERN Stack Course',
    issuer: 'WPU Course (Mentored by Sandhika Galih)',
    year: 'May 2026',
    image: '/img/portfolio/sertifikat-wpu.webp',
    url: 'https://learn.wpucourse.id/certificate/W9I3Y79L',
  },
  
  {
    title: 'Meta Android Development',
    issuer: 'Meta / Coursera',
    year: 'Sep 2023',
    image: '/img/portfolio/sertifikat2.webp',
    url: 'https://coursera.org/share/36f0dee2ee3897554c2e05c05b4380bb',
  },
  {
    title: 'Huawei HCIA-AI V3.0',
    issuer: 'Huawei',
    year: 'Jul 2023',
    image: '/img/portfolio/sertifikat6.webp',
    url: null,
  },
  {
    title: 'IBM Cloud Development',
    issuer: 'IBM / edX',
    year: 'Jun 2022',
    image: '/img/portfolio/sertifikat1.webp',
    url: 'https://courses.edx.org/certificates/4eac6dcfd84f4f37a9f332242fb48af4',
  },
]

const relevantCourses = [
  'Front-End Web Dev', 'Back-End Web Dev', 'OOP & Design Patterns',
  'Database Modeling', 'Agile Development',
]

function Education() {
  return (
    <section id="education" className="bg-slate-100/50 py-24 dark:bg-dark-50/50 sm:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="section-heading">Education & Certifications</p>
          <h2 className="section-title">Academic Highlights</h2>
          <p className="section-subtitle mx-auto">
            Strong Computer Science foundation backed by continuous learning and industry-recognized credentials.
          </p>
        </div>

        {/* University Card */}
        <div className="reveal mb-12">
          <div className="card overflow-hidden p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 lg:aspect-auto lg:w-2/5">
                <img
                  src="/img/portfolio/education1.webp"
                  alt="Universitas Mikroskil Graduation"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="mb-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  Bachelor of Computer Science
                </h3>
                <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <span>Universitas Mikroskil</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span className="font-semibold text-primary-600 dark:text-primary-400">2021 — 2025</span>
                </div>

                {/* GPA Card */}
                <div className="mb-6 inline-flex items-center gap-4 rounded-xl border border-primary-200/60 bg-primary-50/50 p-4 dark:border-primary-800/40 dark:bg-primary-900/10">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">GPA</p>
                    <p className="text-2xl font-extrabold text-primary-600 dark:text-primary-400">3.86 <span className="text-sm font-medium text-slate-400">/ 4.00</span></p>
                  </div>
                  <div className="h-10 w-px bg-primary-200 dark:bg-primary-800" />
                  <div className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-bold text-amber-600 dark:text-amber-400">Summa Cum Laude</span>
                  </div>
                </div>

                {/* Relevant Courses */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relevantCourses.map((course) => (
                      <span key={course} className="tech-badge">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="reveal">
          <h3 className="mb-8 text-center text-xl font-bold text-slate-900 dark:text-white">
            Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className={`card card-hover reveal-delay-${Math.min(i + 1, 5)} group flex flex-col overflow-hidden p-0`}
              >
                {/* Cert Image — clean container, no red borders */}
                <div className="flex aspect-video items-center justify-center overflow-hidden bg-white dark:bg-slate-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Cert Info — compact */}
                <div className="flex flex-1 flex-col p-4">
                  <h4 className="mb-0.5 text-sm font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                  <div className="mb-3 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                    <span>{cert.issuer}</span>
                    <span>·</span>
                    <span>{cert.year}</span>
                    {cert.grade && (
                      <>
                        <span>·</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">{cert.grade}</span>
                      </>
                    )}
                  </div>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      View Credential
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </a>
                  ) : (
                    <span className="mt-auto text-xs text-slate-300 dark:text-slate-600">No public link</span>
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
