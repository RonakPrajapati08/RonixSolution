import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import PricingCard from '../components/PricingCard'
import { services, projects, testimonials, pricingPlans, technologies } from '../data'

/* ── HERO ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-16">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C8FF57]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-[#60CFFF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF57] animate-pulse" />
          <span className="text-xs font-mono text-slate-400 tracking-wider">Now accepting projects for Q3 2025</span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-white max-w-5xl mx-auto">
          We build digital
          <br />
          <span className="text-gradient">products that scale</span>
        </h1>

        <p className="mt-7 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          NexusLab is a full-stack agency crafting web apps, mobile products, and design systems for startups and enterprises that move fast.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold text-base rounded-xl hover:bg-[#d4ff70] transition-colors">
            Start a Project
          </Link>
          <Link to="/projects" className="px-8 py-4 bg-white/5 text-white font-display font-semibold text-base rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            View Our Work
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-20 inline-grid grid-cols-3 divide-x divide-white/10 bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
          {[
            { n: '120+', label: 'Projects Shipped' },
            { n: '$40M+', label: 'Client Revenue Generated' },
            { n: '98%', label: 'Client Satisfaction' },
          ].map(({ n, label }) => (
            <div key={label} className="px-8 py-5 text-center">
              <div className="font-display font-bold text-2xl text-white">{n}</div>
              <div className="text-xs text-slate-500 mt-0.5 whitespace-nowrap">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── ABOUT PREVIEW ─────────────────────────────────────────── */
function AboutPreview() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-4 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
            Who We Are
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mt-2">
            A team that thinks like founders
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            We started NexusLab because we were frustrated with agencies that shipped mediocre work slowly. We hire only senior engineers and designers, keep teams lean, and treat every project like it's our own product.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The result? Faster timelines, higher quality, and products that actually move the needle for your business.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-[#C8FF57] font-display font-semibold text-sm hover:gap-3 transition-all">
            Meet the team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Founded', value: '2019' },
            { label: 'Team Size', value: '24' },
            { label: 'Countries', value: '18' },
            { label: 'Industries', value: '12+' },
          ].map(({ label, value }) => (
            <div key={label} className="card-glass rounded-2xl p-6 text-center">
              <div className="font-display font-bold text-4xl text-white mb-1">{value}</div>
              <div className="text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SERVICES OVERVIEW ─────────────────────────────────────── */
function ServicesOverview() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What We Do"
          title="Services built for modern products"
          subtitle="From the first pixel to the last deployment — we cover the full stack."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-display font-semibold text-slate-400 hover:text-white transition-colors">
            Explore all services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── TECHNOLOGIES ──────────────────────────────────────────── */
function Technologies() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Tools we master"
        subtitle="We work with the best tools in the industry — no fads, just proven technology."
      />
      <div className="flex flex-wrap justify-center gap-3">
        {technologies.map(({ name, category }) => (
          <div key={name} className="flex items-center gap-2.5 px-4 py-2.5 card-glass rounded-xl hover:border-white/15 transition-colors">
            <span className="text-white font-display font-semibold text-sm">{name}</span>
            <span className="text-xs font-mono text-slate-600">{category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── FEATURED PROJECTS ─────────────────────────────────────── */
function FeaturedProjects() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Work"
          title="Projects we're proud of"
          subtitle="Real products. Real results. Real businesses that grew."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-display font-semibold text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ──────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Client Love"
        title="Don't take our word for it"
        subtitle="Here's what the founders and CTOs we work with have to say."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </div>
    </section>
  )
}

/* ── PRICING PREVIEW ───────────────────────────────────────── */
function PricingPreview() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent, no-surprise pricing"
          subtitle="Fixed-price projects. No hourly billing. No hidden fees."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/pricing" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
            Compare plans in detail →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ───────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#C8FF57] p-14 text-center">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0D1117] leading-tight max-w-2xl mx-auto">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-[#0D1117]/70 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll get back to you within 24 hours with a plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/contact" className="px-8 py-4 bg-[#0D1117] text-[#C8FF57] font-display font-bold text-base rounded-xl hover:bg-[#161B27] transition-colors">
              Start a Conversation
            </Link>
            <Link to="/projects" className="px-8 py-4 bg-[#0D1117]/10 text-[#0D1117] font-display font-semibold text-base rounded-xl hover:bg-[#0D1117]/20 transition-colors">
              See Our Work First
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PAGE ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <Technologies />
      <FeaturedProjects />
      <Testimonials />
      <PricingPreview />
      <CTA />
    </>
  )
}
