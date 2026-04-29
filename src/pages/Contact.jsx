import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@ronixsolution.io',
    sub: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 99254 35830',
    sub: 'Mon–Sun, 9am–9pm PT',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office',
    value: '340 Pine Street, Suite 800',
    sub: 'Vastrapur, Ahmedabad 380015',
  },
]

const projectTypes = ['Web Application', 'Mobile App', 'UI/UX Design', 'E-Commerce', 'API Development', 'Other']
const budgets = ['₹10k – ₹15k', '₹20k – ₹30k', '₹30k – ₹50k', '₹50k+', 'Not sure yet']

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card-glass rounded-2xl p-10 text-center flex flex-col items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-[#C8FF57]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#C8FF57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl text-white">Message received!</h3>
          <p className="text-slate-400 mt-2">We'll get back to you within 24 hours.</p>
        </div>
        <button onClick={() => setSubmitted(false)} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
          Send another message
        </button>
      </div>
    )
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#C8FF57]/50 focus:bg-white/8 transition-colors"

  return (
    <form onSubmit={submit} className="card-glass rounded-2xl p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-slate-500 mb-2">Your Name *</label>
          <input required value={form.name} onChange={handle('name')} placeholder="Alex Johnson" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-500 mb-2">Email Address *</label>
          <input required type="email" value={form.email} onChange={handle('email')} placeholder="alex@company.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-500 mb-2">Company / Project Name</label>
        <input value={form.company} onChange={handle('company')} placeholder="Acme Inc." className={inputClass} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-slate-500 mb-2">Project Type</label>
          <select value={form.type} onChange={handle('type')} className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select type...</option>
            {projectTypes.map(t => <option key={t} value={t} className="bg-[#1E2535]">{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-500 mb-2">Estimated Budget</label>
          <select value={form.budget} onChange={handle('budget')} className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select range...</option>
            {budgets.map(b => <option key={b} value={b} className="bg-[#1E2535]">{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-500 mb-2">Tell us about your project *</label>
        <textarea
          required
          value={form.message}
          onChange={handle('message')}
          rows={5}
          placeholder="Describe what you're building, your timeline, any existing systems we'd need to integrate with..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button type="submit" className="w-full py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold text-sm rounded-xl hover:bg-[#d4ff70] transition-colors">
        Send Message →
      </button>

      <p className="text-xs text-slate-600 text-center">No spam. We'll reply within 24 hours with a thoughtful response.</p>
    </form>
  )
}

function PageHero() {
  return (
    <section className="relative pt-40 pb-16 bg-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#60CFFF]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          Contact
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight">
          Let's build something
        </h1>
        <p className="mt-5 text-slate-400 text-xl max-w-xl mx-auto">
          Tell us about your project. We'll respond with a clear plan and honest timeline.
        </p>
      </div>
    </section>
  )
}

function MapPlaceholder() {
  return (
    <div className="relative w-full h-64 card-glass rounded-2xl overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-grid opacity-50" />
      {/* Fake map grid */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute border-white/5" style={{
            left: `${(i % 4) * 25}%`,
            top: `${Math.floor(i / 4) * 50}%`,
            width: '25%',
            height: '50%',
            border: '1px solid rgba(255,255,255,0.04)'
          }} />
        ))}
      </div>
      <div className="relative flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[#C8FF57] flex items-center justify-center">
          <svg className="w-5 h-5 text-[#0D1117]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-white font-display font-semibold text-sm">San Francisco, CA</span>
        <span className="text-slate-500 text-xs">340 Pine Street, Suite 800</span>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero />
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Info + Map */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">Get in touch</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prefer a call? Book a free 30-minute intro session directly — no sales pitch, just a genuine conversation about your project.
              </p>
            </div>

            {contactInfo.map(({ icon, label, value, sub }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#C8FF57]/10 flex items-center justify-center text-[#C8FF57] shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-0.5">{label}</p>
                  <p className="text-white text-sm font-semibold">{value}</p>
                  <p className="text-slate-500 text-xs">{sub}</p>
                </div>
              </div>
            ))}

            <MapPlaceholder />

            <div className="card-glass rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#C8FF57] animate-pulse" />
                <span className="text-white text-sm font-display font-semibold">Currently available</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                We're accepting new projects starting Q3 2025. Limited slots available — reach out early to secure your spot.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
