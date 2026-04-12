export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-4 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight ${light ? 'text-white' : 'text-white'} ${center ? 'mx-auto' : ''} max-w-3xl`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
