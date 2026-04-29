import { Link, useParams } from 'react-router-dom'
import { caseStudies, projects } from '../data'
import CaseStudyCard from '../components/CaseStudyCard'

export default function CaseStudy() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find(cs => cs.slug === slug)

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl text-white mb-4">Case study not found</h1>
          <Link to="/projects" className="text-[#C8FF57] font-display font-semibold hover:text-[#d4ff70] transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const relatedStudies = caseStudies.filter(cs => cs.industry === caseStudy.industry && cs.id !== caseStudy.id).slice(0, 3)

  return (
    <div className="pt-32 pb-24">
      {/* Hero section */}
      <section className="relative pt-20 pb-24 bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C8FF57]/6 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm font-mono text-slate-500 mb-8">
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-slate-400">{caseStudy.industry}</span>
          </div>

          {/* Header */}
          <div className="mb-4">
            <div className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
              {caseStudy.industry}
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              {caseStudy.title}
            </h1>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div>
              <p className="text-slate-600 uppercase font-mono text-xs mb-1">Client</p>
              <p className="font-mono font-semibold text-white">{caseStudy.client}</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <p className="text-slate-600 uppercase font-mono text-xs mb-1">Year</p>
              <p className="font-mono font-semibold text-white">{caseStudy.year}</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <p className="text-slate-600 uppercase font-mono text-xs mb-1">Team Size</p>
              <p className="font-mono font-semibold text-white">{caseStudy.team.join(' + ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="card-glass rounded-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, #161B27 0%, #1E2535 100%)` }}>
          <div className="h-96 relative flex items-center justify-center" style={{ background: `${caseStudy.image}15` }}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl border border-white/10 mb-4" style={{ background: `${caseStudy.image}20` }}>
                <span className="text-5xl">→</span>
              </div>
              <p className="text-slate-400">{caseStudy.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Results */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="space-y-20">
          {/* Challenge */}
          <div>
            <div className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-4 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
              The Challenge
            </div>
            <h2 className="font-display font-bold text-4xl text-white leading-tight mb-6">
              What we needed to solve
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="inline-block text-xs font-mono tracking-widest text-[#60CFFF] uppercase mb-4 px-3 py-1.5 bg-[#60CFFF]/10 rounded-full border border-[#60CFFF]/20">
              Our Solution
            </div>
            <h2 className="font-display font-bold text-4xl text-white leading-tight mb-6">
              How we built it
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* Results */}
          <div>
            <div className="inline-block text-xs font-mono tracking-widest text-[#60CFFF] uppercase mb-4 px-3 py-1.5 bg-[#60CFFF]/10 rounded-full border border-[#60CFFF]/20">
              Results & Impact
            </div>
            <h2 className="font-display font-bold text-4xl text-white leading-tight mb-8">
              What we delivered
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results.metrics.map((metric, i) => (
                <div key={i} className="card-glass rounded-2xl p-8">
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <p className="text-slate-600 uppercase font-mono text-xs mb-2">{metric.label}</p>
                  <p className="font-display font-bold text-3xl text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Team */}
      <section className="py-20 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Tech Stack */}
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.techStack.map((tech) => (
                  <div key={tech} className="px-4 py-2.5 card-glass rounded-lg border border-white/10 hover:border-[#C8FF57]/30 transition-colors">
                    <p className="text-white font-display font-semibold text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">Our Team</h3>
              <div className="space-y-3">
                {caseStudy.team.map((role, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 card-glass rounded-lg border border-white/10">
                    <div className="w-3 h-3 rounded-full bg-[#C8FF57]" />
                    <p className="text-white font-mono text-sm">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="font-display font-bold text-3xl text-white mb-12">Key Learnings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Speed Matters',
              desc: `Delivering fast doesn't mean compromising quality. Clear requirements and agile processes accelerate delivery by 40%.`
            },
            {
              title: 'Communication is Key',
              desc: `Weekly demos, transparent updates, and async documentation prevent misalignment and scope creep.`
            },
            {
              title: 'Architecture Wins',
              desc: `Good initial architecture decisions save 10x effort during scaling. Invest in foundations, not quick hacks.`
            },
          ].map((item, i) => (
            <div key={i} className="card-glass rounded-2xl p-6">
              <h4 className="font-display font-semibold text-white text-lg mb-3">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-20 bg-[#080B12]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl text-white mb-12">More Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedStudies.map((study) => (
                <CaseStudyCard key={study.id} {...study} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center">
        <div className="card-glass rounded-2xl p-12 border border-[#C8FF57]/20">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Ready to ship something amazing?</h2>
          <p className="text-slate-400 mb-8">Let's partner with you to build your next success story.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold rounded-lg hover:bg-[#d4ff70] transition-colors">
            Start a Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
