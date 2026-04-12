export default function ProjectCard({ title, category, description, color = '#C8FF57', index = 0 }) {
  const patterns = [
    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 11px)",
    "radial-gradient(circle at 30% 50%, rgba(200,255,87,0.15) 0%, transparent 60%)",
    "radial-gradient(circle at 70% 30%, rgba(96,207,255,0.15) 0%, transparent 60%)",
    "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 11px)",
    "radial-gradient(ellipse at 50% 80%, rgba(200,255,87,0.1) 0%, transparent 70%)",
    "radial-gradient(circle at 80% 20%, rgba(96,207,255,0.12) 0%, transparent 50%)",
  ]

  return (
    <div className="card-glass rounded-2xl overflow-hidden hover:border-white/15 transition-colors group">
      {/* Visual placeholder */}
      <div className="h-52 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #161B27 0%, #1E2535 100%)` }}>
        <div className="absolute inset-0" style={{ backgroundImage: patterns[index % patterns.length] }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center" style={{ background: `${color}15` }}>
            <span className="font-display font-bold text-2xl" style={{ color }}>{title[0]}</span>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: `${color}20`, color }}>{category}</span>
        </div>
      </div>
      {/* Info */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-white text-base mb-1.5">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-500 group-hover:text-[#C8FF57] transition-colors">
          <span>View case study</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </div>
  )
}
