import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import PricingCard from '../components/PricingCard'
import { pricingPlans } from '../data'

const comparisonFeatures = [
  { feature: 'Number of pages', starter: 'Up to 5', growth: 'Up to 15', enterprise: 'Unlimited' },
  { feature: 'Custom UI/UX design', starter: false, growth: true, enterprise: true },
  { feature: 'CMS integration', starter: false, growth: true, enterprise: true },
  { feature: 'API integrations', starter: false, growth: '3 included', enterprise: 'Unlimited' },
  { feature: 'Performance optimization', starter: 'Basic', growth: true, enterprise: true },
  { feature: 'SEO setup', starter: true, growth: true, enterprise: true },
  { feature: 'Revision rounds', starter: '2 rounds', growth: '4 rounds', enterprise: 'Unlimited' },
  { feature: 'Post-launch support', starter: '30 days', growth: '60 days', enterprise: '6 months' },
  { feature: 'Analytics dashboard', starter: false, growth: true, enterprise: true },
  { feature: 'CI/CD pipeline setup', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated project team', starter: false, growth: false, enterprise: true },
  { feature: 'SLA guarantee', starter: false, growth: false, enterprise: true },
]

const faqs = [
  {
    q: 'How does fixed-price billing work?',
    a: "We scope your project thoroughly upfront and agree on a fixed price. You know exactly what you're paying before we start — no surprise invoices, no hourly billing.",
  },
  {
    q: 'What if the scope changes mid-project?',
    a: "We handle minor adjustments within the agreed scope. For significant additions, we discuss and agree on a change order before proceeding. Transparency first.",
  },
  {
    q: 'How long does a typical project take?',
    a: "Starter projects typically take 4–6 weeks. Growth projects run 8–14 weeks. Enterprise engagements are scoped individually and usually start with a 3-month roadmap.",
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: "Yes — after the included support period ends, we offer monthly retainer packages starting at $999/mo for ongoing maintenance, updates, and feature development.",
  },
  {
    q: 'Who owns the code?',
    a: "You do. 100%. Full source code is delivered at project completion with full IP transfer. No vendor lock-in, ever.",
  },
  {
    q: 'Can I start with Starter and upgrade?',
    a: "Absolutely. Many clients start with Starter to validate, then return for a Growth project. We design everything with future scalability in mind.",
  },
]

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 bg-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C8FF57]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          Pricing
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          Simple, honest pricing
        </h1>
        <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Fixed-price projects. No hourly billing. No hidden fees. Know exactly what you're paying before we write a line of code.
        </p>
      </div>
    </section>
  )
}

function Plans() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.plan} {...plan} />
        ))}
      </div>
      <p className="text-center text-slate-500 text-sm mt-8">
        All prices are per-project, not per-month. Need something recurring?{' '}
        <Link to="/contact" className="text-[#C8FF57] hover:underline">Ask about retainers.</Link>
      </p>
    </section>
  )
}

function Comparison() {
  const CheckIcon = () => (
    <svg className="w-4 h-4 text-[#C8FF57] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
  const XIcon = () => (
    <svg className="w-4 h-4 text-slate-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  const renderCell = (val) => {
    if (val === true) return <CheckIcon />
    if (val === false) return <XIcon />
    return <span className="text-slate-300 text-sm font-mono">{val}</span>
  }

  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Compare"
          title="Feature breakdown"
          subtitle="See exactly what's included in each plan."
        />
        <div className="card-glass rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-white/3 border-b border-white/8">
            <div className="p-5 text-slate-500 text-sm font-mono">Feature</div>
            {['Starter', 'Growth', 'Enterprise'].map((plan, i) => (
              <div key={plan} className={`p-5 text-center ${i === 1 ? 'bg-[#C8FF57]/5' : ''}`}>
                <span className={`font-display font-bold text-sm ${i === 1 ? 'text-[#C8FF57]' : 'text-white'}`}>{plan}</span>
              </div>
            ))}
          </div>
          {/* Rows */}
          {comparisonFeatures.map(({ feature, starter, growth, enterprise }, idx) => (
            <div key={feature} className={`grid grid-cols-4 border-b border-white/5 ${idx % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
              <div className="p-4 text-slate-400 text-sm">{feature}</div>
              <div className="p-4 text-center">{renderCell(starter)}</div>
              <div className="p-4 text-center bg-[#C8FF57]/3">{renderCell(growth)}</div>
              <div className="p-4 text-center">{renderCell(enterprise)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <SectionHeader
        eyebrow="FAQ"
        title="Common questions"
        subtitle="If yours isn't here, reach out — we reply within a few hours."
      />
      <div className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <div key={q} className="card-glass rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-display font-semibold text-white text-sm md:text-base">{q}</span>
              <svg
                className={`w-4 h-4 text-slate-500 shrink-0 ml-4 transition-transform ${open === i ? 'rotate-45' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            {open === i && (
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                {a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function PricingCTA() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161B27] to-[#0D1117] border border-white/8 p-14 text-center">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C8FF57]/4 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl text-white">Not sure which plan fits?</h2>
          <p className="mt-3 text-slate-400">Book a free 30-minute scoping call — no commitment, no pressure.</p>
          <Link to="/contact" className="inline-block mt-8 px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold rounded-xl hover:bg-[#d4ff70] transition-colors">
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <>
      <PageHero />
      <Plans />
      <Comparison />
      <FAQSection />
      <PricingCTA />
    </>
  )
}
