import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We learn your business, users, and goals inside-out before writing a single line of code.' },
  { step: '02', title: 'Design', desc: 'Wireframes → high-fidelity mockups → interactive prototypes. You approve before we build.' },
  { step: '03', title: 'Development', desc: 'Sprints with weekly demos. Always deployable. Always reviewed by senior engineers.' },
  { step: '04', title: 'Launch', desc: 'Production deployment, QA, performance tuning, and monitoring setup included.' },
  { step: '05', title: 'Support', desc: "Post-launch support package included in every project. We don't disappear at go-live." },
]

const extraServices = [
  {
    icon: '⚙️',
    title: 'Technical Audits',
    description: 'We review your existing codebase and deliver a detailed report with prioritized improvements.',
    tags: ['Code Review', 'Architecture', 'Performance'],
  },
  {
    icon: '🔐',
    title: 'Security Reviews',
    description: 'Identify vulnerabilities before bad actors do. OWASP-based security audits for web applications.',
    tags: ['OWASP', 'Penetration Testing', 'Auth'],
  },
  {
    icon: '📈',
    title: 'Growth Engineering',
    description: 'A/B testing infrastructure, analytics pipelines, and conversion rate optimization.',
    tags: ['A/B Testing', 'Analytics', 'CRO'],
  },
]

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 bg-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C8FF57]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          Our Services
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl mx-auto">
          Everything you need to ship
        </h1>
        <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          From MVP to enterprise scale — we handle every layer of the stack with the same obsessive attention to quality.
        </p>
      </div>
    </section>
  )
}

function CoreServices() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Core Offerings"
        title="Full-stack capabilities"
        subtitle="We cover every discipline so you don't have to juggle multiple vendors."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}

function AdditionalServices() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Also Available"
          title="Specialized services"
          subtitle="Need something specific? We've got you covered."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {extraServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="How We Work"
        title="Our process"
        subtitle="A repeatable system that reliably delivers excellent results."
      />
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-white/5 hidden md:block" />
        <div className="space-y-6">
          {processSteps.map(({ step, title, desc }) => (
            <div key={step} className="flex gap-8 items-start">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#C8FF57]/10 border border-[#C8FF57]/20 flex items-center justify-center font-mono text-[#C8FF57] text-sm font-bold relative z-10">
                {step}
              </div>
              <div className="card-glass rounded-2xl p-6 flex-1">
                <h3 className="font-display font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesCTA() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#C8FF57] p-14 text-center">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display font-bold text-4xl text-[#0D1117] max-w-2xl mx-auto">
              Not sure what you need?
            </h2>
            <p className="mt-4 text-[#0D1117]/70 text-lg">
              Book a free 30-minute strategy call. We'll help you scope exactly what to build.
            </p>
            <Link to="/contact" className="inline-block mt-8 px-8 py-4 bg-[#0D1117] text-[#C8FF57] font-display font-bold rounded-xl hover:bg-[#161B27] transition-colors">
              Book a Free Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />
      <CoreServices />
      <AdditionalServices />
      <Process />
      <ServicesCTA />
    </>
  )
}
