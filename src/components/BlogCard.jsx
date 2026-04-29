import { Link } from 'react-router-dom'

export default function BlogCard({ id, slug, title, excerpt, category, author, date, readTime, image, tags = [] }) {
  return (
    <Link to={`/blog/${slug}`}>
      <div className="card-glass rounded-2xl overflow-hidden hover:border-white/15 transition-all group cursor-pointer h-full flex flex-col">
        {/* Image placeholder */}
        <div className="h-40 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #161B27 0%, #1E2535 100%)` }}>
          <div className="absolute inset-0" style={{ background: `${image}20` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-2xl">{category[0]}</div>
          </div>
          <div className="absolute top-3 left-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-slate-300">{category}</span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#C8FF57]/20 text-[#C8FF57]">{readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-display font-semibold text-white text-base mb-2 line-clamp-2 group-hover:text-[#C8FF57] transition-colors">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">{excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs">
            <div className="text-slate-500">
              <p className="font-mono">{author}</p>
              <p className="text-slate-600">{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
            </div>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-[#C8FF57] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
