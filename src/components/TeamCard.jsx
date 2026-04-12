const AVATAR_COLORS = [
  { bg: '#C8FF57', text: '#0D1117' },
  { bg: '#60CFFF', text: '#0D1117' },
  { bg: '#FF6B6B', text: '#fff' },
  { bg: '#A78BFA', text: '#fff' },
  { bg: '#FB923C', text: '#fff' },
]

export default function TeamCard({ name, role, bio, index = 0 }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length]
  const initials = name.split(' ').map(n => n[0]).join('')

  return (
    <div className="card-glass rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg shrink-0"
          style={{ background: color.bg, color: color.text }}
        >
          {initials}
        </div>
        <div>
          <h3 className="font-display font-semibold text-white">{name}</h3>
          <p className="text-[#C8FF57] text-xs font-mono">{role}</p>
        </div>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{bio}</p>
      <div className="flex gap-2 pt-1">
        {['twitter', 'linkedin', 'github'].map((s) => (
          <a key={s} href="#" className="text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors px-2 py-1 bg-white/5 rounded-md">
            {s}
          </a>
        ))}
      </div>
    </div>
  )
}
