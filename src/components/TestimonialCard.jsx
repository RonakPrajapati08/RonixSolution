export default function TestimonialCard({ quote, author, role, company }) {
  return (
    <div className="card-glass rounded-2xl p-7 flex flex-col gap-5">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#C8FF57]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed flex-1">"{quote}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-[#C8FF57]/10 flex items-center justify-center text-[#C8FF57] font-display font-bold text-sm">
          {author[0]}
        </div>
        <div>
          <p className="text-white text-sm font-semibold font-display">{author}</p>
          <p className="text-slate-500 text-xs">{role} · {company}</p>
        </div>
      </div>
    </div>
  )
}
