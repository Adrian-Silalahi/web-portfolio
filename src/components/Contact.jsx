import { useState } from 'react'

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="currentColor"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="currentColor"/>
  </svg>
)

const brandConfig = {
  Email:    { Icon: GmailIcon,    hoverBg: 'group-hover:bg-red-50',     hoverColor: 'group-hover:text-[#EA4335]',   hoverBorder: 'group-hover:border-[#EA4335]/30' },
  LinkedIn: { Icon: LinkedInIcon, hoverBg: 'group-hover:bg-blue-50',    hoverColor: 'group-hover:text-[#0A66C2]',   hoverBorder: 'group-hover:border-[#0A66C2]/30' },
  GitHub:   { Icon: GitHubIcon,   hoverBg: 'group-hover:bg-slate-100',  hoverColor: 'group-hover:text-slate-900',   hoverBorder: 'group-hover:border-slate-900/30' },
  WhatsApp: { Icon: WhatsAppIcon, hoverBg: 'group-hover:bg-green-50',   hoverColor: 'group-hover:text-[#25D366]',   hoverBorder: 'group-hover:border-[#25D366]/30' },
}

// For dark mode
const darkBrandConfig = {
  Email:    { hoverBg: 'dark:group-hover:bg-red-900/20',     hoverColor: 'dark:group-hover:text-red-400',   hoverBorder: 'dark:group-hover:border-red-500/30' },
  LinkedIn: { hoverBg: 'dark:group-hover:bg-blue-900/20',    hoverColor: 'dark:group-hover:text-blue-400',  hoverBorder: 'dark:group-hover:border-blue-500/30' },
  GitHub:   { hoverBg: 'dark:group-hover:bg-slate-800',      hoverColor: 'dark:group-hover:text-white',     hoverBorder: 'dark:group-hover:border-slate-400/30' },
  WhatsApp: { hoverBg: 'dark:group-hover:bg-green-900/20',   hoverColor: 'dark:group-hover:text-green-400', hoverBorder: 'dark:group-hover:border-green-500/30' },
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const contactLinks = [
    {
      label: 'Email',
      value: 'adrianussilalahi766@gmail.com',
      href: 'mailto:adrianussilalahi766@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'adrianus-silalahi',
      href: 'https://www.linkedin.com/in/adrianus-silalahi-511a6b296/',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'Adrian-Silalahi',
      href: 'https://github.com/Adrian-Silalahi',
      external: true,
    },
    {
      label: 'WhatsApp',
      value: '+62 895 3322 16003',
      href: 'https://wa.me/62895332216003',
      external: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Trigger mailto client
    window.location.href = `mailto:adrianussilalahi766@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (%0A%0AReply to: ${formData.email})`
  }

  return (
    <section id="contact" className="bg-slate-900 pt-16 pb-24 sm:pt-24 sm:pb-32 dark:bg-slate-950 relative overflow-hidden">
      
      {/* SVG Wave Transition from previous light section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-50 dark:fill-slate-900"></path>
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="h-full w-full max-w-4xl bg-primary-900/20 blur-[120px] dark:bg-primary-900/10 rounded-full mix-blend-screen" />
      </div>

      <div className="section-container relative z-10">
        <div className="reveal mx-auto text-center mb-16">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary-500/30 bg-primary-500/10 px-5 py-2 text-sm font-bold text-primary-400 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
            </span>
            Open to new opportunities
          </div>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">Let's Build Something Great</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Looking for a full-time Fullstack Developer — open to relocation 📍 <br className="hidden sm:block" />
            If you have an interesting problem to solve, I'd love to be part of the solution.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start mx-auto max-w-5xl">
          
          {/* Left Column: Direct Contact Form */}
          <div className="reveal order-2 lg:order-1 rounded-3xl border border-slate-700/50 bg-slate-800/50 p-6 sm:p-8 backdrop-blur-md shadow-xl shadow-black/20">
            <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-600 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-600 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-slate-600 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-primary-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-400 hover:shadow-primary-500/40 active:scale-[0.98]"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="reveal order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-6 hidden lg:block">Or connect directly</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactLinks.map((link, i) => {
                const conf = brandConfig[link.label]
                const dConf = darkBrandConfig[link.label]
                return (
                  <a
                    key={i}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/80 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${conf.hoverBorder} ${dConf.hoverBorder}`}
                  >
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-700 text-slate-400 transition-all duration-300 group-hover:scale-110 ${conf.hoverBg} ${conf.hoverColor} ${dConf.hoverBg} ${dConf.hoverColor}`}>
                      {(() => { const { Icon } = conf; return <Icon /> })()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {link.label}
                      </p>
                      <p className={`truncate text-sm font-bold text-slate-300 transition-colors ${conf.hoverColor} ${dConf.hoverColor}`}>
                        {link.value}
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`ml-auto h-4 w-4 flex-shrink-0 text-slate-600 transition-transform group-hover:translate-x-1 ${conf.hoverColor} ${dConf.hoverColor}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                )
              })}
            </div>
            {/* Response time */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xl">
                ⚡
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Response Time</p>
                <p className="text-sm font-semibold text-slate-300">Usually within <span className="text-primary-400">24 hours</span></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
