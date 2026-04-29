import { Link } from 'react-router-dom'

export default function CaseStudyCard({ slug, title, client, industry, image, tagline }) {
  return (
    <Link to={`/case-study/${slug}`}>
      <div className="card-glass rounded-2xl overflow-hidden hover:border-white/15 transition-all group cursor-pointer flex flex-col">
        {/* Image */}
        <div className="h-48 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #161B27 0%, #1E2535 100%)` }}>
          <div className="absolute inset-0" style={{ background: `${image}15` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl" style={{ opacity: 0.3 }}>→</div>
          </div>
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-slate-300">{industry}</span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#C8FF57]/20 text-[#C8FF57]">{client}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-[#C8FF57] transition-colors leading-tight">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{tagline}</p>

          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 group-hover:text-[#C8FF57] transition-colors">
            <span>Read case study</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
