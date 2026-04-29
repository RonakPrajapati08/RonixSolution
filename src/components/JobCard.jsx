export default function JobCard({ title, department, location, type, level, description, salary, skills }) {
  return (
    <div className="card-glass rounded-2xl p-6 hover:border-white/15 transition-all group cursor-pointer flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-display font-semibold text-white text-lg mb-1 group-hover:text-[#C8FF57] transition-colors">{title}</h3>
          <p className="text-[#C8FF57] text-xs font-mono">{department}</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="text-xs font-mono px-2.5 py-1 bg-white/5 rounded-full text-slate-400">{type}</span>
        <span className="text-xs font-mono px-2.5 py-1 bg-white/5 rounded-full text-slate-400">{location}</span>
        <span className="text-xs font-mono px-2.5 py-1 bg-white/5 rounded-full text-slate-400">{level}</span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>

      {/* Salary */}
      {salary && (
        <div className="mb-4 p-3 bg-[#C8FF57]/5 border border-[#C8FF57]/20 rounded-lg">
          <p className="text-xs text-slate-600 uppercase font-mono">Salary</p>
          <p className="text-[#C8FF57] font-display font-semibold">{salary}</p>
        </div>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {skills.slice(0, 3).map((skill) => (
          <span key={skill} className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-md">{skill}</span>
        ))}
        {skills.length > 3 && (
          <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-md">+{skills.length - 3}</span>
        )}
      </div>

      {/* CTA */}
      <button className="mt-4 w-full px-4 py-2.5 bg-[#C8FF57]/10 text-[#C8FF57] font-mono text-xs font-semibold rounded-lg hover:bg-[#C8FF57]/20 transition-colors group-hover:bg-[#C8FF57] group-hover:text-[#0D1117]">
        View Job
      </button>
    </div>
  )
}
