import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import BlogCard from '../components/BlogCard'
import { blogs } from '../data'

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 bg-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#60CFFF]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          Knowledge Hub
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl mx-auto">
          Engineering insights<br />
          <span className="text-gradient">from our team</span>
        </h1>
        <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Deep dives into modern development, design systems, cloud architecture, and lessons learned shipping products at scale.
        </p>
      </div>
    </section>
  )
}

function FeaturedBlog() {
  const featured = blogs[0]
  
  return (
    <section className="py-12 max-w-7xl mx-auto px-6 mb-12">
      <Link to={`/blog/${featured.slug}`}>
        <div className="card-glass rounded-2xl overflow-hidden hover:border-white/15 transition-all group cursor-pointer">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Image */}
            <div className="h-full relative overflow-hidden min-h-96 md:min-h-auto" style={{ background: `linear-gradient(135deg, #161B27 0%, #1E2535 100%)` }}>
              <div className="absolute inset-0" style={{ background: `${featured.image}20` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl border border-white/10 flex items-center justify-center text-5xl">{featured.category[0]}</div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/10 text-slate-300 font-semibold">Featured</span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#C8FF57]/20 text-[#C8FF57] font-semibold">{featured.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-4 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
                  {featured.category}
                </span>
                <h2 className="font-display font-bold text-4xl text-white leading-tight mb-4 group-hover:text-[#C8FF57] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="text-sm">
                  <p className="font-mono text-white font-semibold">{featured.author}</p>
                  <p className="text-slate-500 text-xs mt-1">{new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-[#C8FF57] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}

function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(blogs.map(b => b.category))]
  const filtered = selectedCategory === 'All' ? blogs.slice(1) : blogs.filter(b => b.category === selectedCategory).slice(1)

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-8">Latest Articles</h2>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-lg font-mono text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C8FF57] text-[#0D1117]'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="card-glass rounded-2xl p-12 border border-[#C8FF57]/20 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Stay Updated</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Get our latest articles and insights delivered to your inbox every week.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#C8FF57] transition-colors"
            required
          />
          <button className="px-8 py-3 bg-[#C8FF57] text-[#0D1117] font-display font-bold rounded-lg hover:bg-[#d4ff70] transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-slate-600 mt-4">No spam, just quality content. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export default function Blog() {
  return (
    <>
      <PageHero />
      <FeaturedBlog />
      <BlogGrid />
      <Newsletter />
    </>
  )
}
