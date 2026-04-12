export default function ServiceCard({ icon, title, description, tags = [] }) {
  return (
    <div className="card-glass rounded-2xl p-6 flex flex-col gap-4 hover:border-white/15 transition-colors">
      <div className="w-11 h-11 rounded-xl bg-[#C8FF57]/10 flex items-center justify-center text-[#C8FF57] text-xl">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-semibold text-white text-lg mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-md">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}
