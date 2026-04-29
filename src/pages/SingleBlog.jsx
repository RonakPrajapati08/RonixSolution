import { Link, useParams } from 'react-router-dom'
import { blogs } from '../data'

export default function SingleBlog() {
  const { slug } = useParams()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl text-white mb-4">Article not found</h1>
          <Link to="/blog" className="text-[#C8FF57] font-display font-semibold hover:text-[#d4ff70] transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedBlogs = blogs.filter(b => b.category === blog.category && b.id !== blog.id).slice(0, 3)

  return (
    <div className="pt-32 pb-24">
      {/* Hero section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm font-mono text-slate-500 mb-8">
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">{blog.category}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
            {blog.category}
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8FF57] to-[#60CFFF] flex items-center justify-center text-[#0D1117] font-display font-bold text-xs">
                {blog.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-white font-mono font-semibold">{blog.author}</p>
                <p className="text-slate-500 text-xs">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <span className="text-slate-400">{blog.readTime} read</span>
          </div>
        </div>

        {/* Featured image */}
        <div className="card-glass rounded-2xl overflow-hidden mb-16" style={{ background: `linear-gradient(135deg, #161B27 0%, #1E2535 100%)` }}>
          <div className="h-96 relative flex items-center justify-center" style={{ background: `${blog.image}15` }}>
            <div className="w-24 h-24 rounded-2xl border border-white/10 flex items-center justify-center text-6xl" style={{ background: `${blog.image}20` }}>
              {blog.category[0]}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        {/* Render markdown-like content with basic formatting */}
        <div className="prose prose-invert max-w-none">
          <div className="text-slate-300 leading-relaxed space-y-6 font-body text-base">
            {blog.content.split('\n\n').map((paragraph, i) => (
              <div key={i}>
                {paragraph.startsWith('##') ? (
                  <h2 className="font-display font-bold text-2xl text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                ) : paragraph.startsWith('#') ? (
                  <h1 className="font-display font-bold text-3xl text-white mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                ) : (
                  <p className="text-slate-300 leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-3">
          {blog.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-3 py-1.5 bg-white/5 rounded-full text-slate-400 border border-white/10">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author bio */}
        <div className="mt-12 card-glass rounded-2xl p-8 border border-[#C8FF57]/20">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C8FF57] to-[#60CFFF] flex items-center justify-center text-[#0D1117] font-display font-bold text-xl shrink-0">
              {blog.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-1">{blog.author}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Senior engineer at RonixSolution with expertise in {blog.tags.join(', ')}. Passionate about building scalable systems and sharing knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-[#080B12]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl text-white mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((article) => (
                <Link key={article.id} to={`/blog/${article.slug}`}>
                  <div className="card-glass rounded-2xl overflow-hidden hover:border-white/15 transition-all group cursor-pointer h-full flex flex-col">
                    <div className="h-32 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #161B27 0%, #1E2535 100%)` }}>
                      <div className="absolute inset-0" style={{ background: `${article.image}20` }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-lg">{article.category[0]}</div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className="text-xs font-mono px-2 py-1 rounded-full bg-white/10 text-slate-300">{article.category}</span>
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="font-display font-semibold text-white text-sm mb-2 line-clamp-2 group-hover:text-[#C8FF57] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-auto pt-3 border-t border-white/10">
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center">
        <div className="card-glass rounded-2xl p-12 border border-[#C8FF57]/20">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Ready to ship something amazing?</h2>
          <p className="text-slate-400 mb-8">Let's work together to build your next big idea.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold rounded-lg hover:bg-[#d4ff70] transition-colors">
            Start a Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
