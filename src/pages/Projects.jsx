import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const allProjects = [
  ...projects,
  { title: 'Heron', category: 'Mobile App', description: 'Social travel companion with AI-powered itinerary building and group coordination.', color: '#F472B6' },
  { title: 'Stackr', category: 'SaaS', description: 'Developer productivity tool tracking code quality metrics across large engineering teams.', color: '#34D399' },
  { title: 'Luma Pay', category: 'FinTech', description: 'Cross-border payment infrastructure reducing international transfer fees by 80%.', color: '#60CFFF' },
  { title: 'Greenhouse', category: 'E-Commerce', description: 'Sustainable goods marketplace connecting eco brands with conscious consumers.', color: '#C8FF57' },
  { title: 'DriveSync', category: 'Web App', description: 'Fleet management platform with real-time GPS, maintenance scheduling, and analytics.', color: '#FB923C' },
  { title: 'Aria Health', category: 'HealthTech', description: 'Patient engagement platform reducing appointment no-shows by 42%.', color: '#A78BFA' },
]

const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))]

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 bg-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#A78BFA]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          Portfolio
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          Work we're proud to show
        </h1>
        <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          120+ projects shipped. Here's a cross-section of industries, scopes, and challenges we've tackled.
        </p>
      </div>
    </section>
  )
}

function ProjectGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === active)

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-display font-medium transition-colors ${
              active === cat
                ? 'bg-[#C8FF57] text-[#0D1117]'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>
  )
}

function ResultsStrip() {
  return (
    <section className="py-16 bg-[#080B12] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '$2M+', label: 'Avg. revenue growth for e-com clients' },
            { n: '34%', label: 'Avg. conversion rate improvement' },
            { n: '60%', label: 'Reduction in load time, avg.' },
            { n: '200k+', label: 'Combined app downloads' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="font-display font-bold text-4xl text-white">{n}</div>
              <div className="text-slate-500 text-sm mt-2 leading-snug max-w-[140px] mx-auto">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsCTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 text-center">
      <SectionHeader
        eyebrow="Your Project"
        title="Let's add yours to the list"
        subtitle="We're selective about who we work with — but if it's a great fit, we move fast."
      />
      <Link to="/contact" className="inline-block px-10 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold text-base rounded-xl hover:bg-[#d4ff70] transition-colors">
        Tell Us About Your Project
      </Link>
    </section>
  )
}

export default function Projects() {
  return (
    <>
      <PageHero />
      <ResultsStrip />
      <ProjectGrid />
      <ProjectsCTA />
    </>
  )
}
