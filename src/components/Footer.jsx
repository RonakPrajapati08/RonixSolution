import { Link } from 'react-router-dom'

const footerLinks = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Pricing', to: '/pricing' },
  ],
  Connect: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'LinkedIn', to: '#' },
    { label: 'Twitter / X', to: '#' },
    { label: 'GitHub', to: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Cookie Policy', to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080B12] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-md bg-[#C8FF57] flex items-center justify-center">
                <span className="text-[#0D1117] font-display font-bold text-sm">R</span>
              </span>
              <span className="font-display font-bold text-white text-lg tracking-tight">Ronix<span className="text-[#C8FF57]">Solution</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              We build high-performance digital products that drive growth. From concept to deployment — we ship fast and ship right.
            </p>
            <div className="flex gap-3 mt-6">
              {['twitter', 'github', 'linkedin'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-colors">
                  <span className="text-xs font-mono">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-display font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} RonixSolution. All rights reserved.</p>
          {/* <p className="text-slate-600 text-sm">Built with React & Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  )
}
