import { Link } from 'react-router-dom'

export default function PricingCard({ plan, price, period = '/mo', description, features, highlighted = false, cta = 'Get Started' }) {
  return (
    <div className={`relative rounded-2xl p-8 flex flex-col gap-6 ${highlighted ? 'bg-[#C8FF57] text-[#0D1117]' : 'card-glass'}`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#0D1117] text-[#C8FF57] text-xs font-mono font-semibold px-4 py-1.5 rounded-full border border-[#C8FF57]/20">Most Popular</span>
        </div>
      )}
      <div>
        <h3 className={`font-display font-bold text-sm uppercase tracking-widest mb-1 ${highlighted ? 'text-[#0D1117]/60' : 'text-slate-500'}`}>{plan}</h3>
        <div className="flex items-end gap-1 mt-3">
          <span className={`font-display font-bold text-5xl ${highlighted ? 'text-[#0D1117]' : 'text-white'}`}>₹{price}</span>
          <span className={`text-sm mb-2 ${highlighted ? 'text-[#0D1117]/60' : 'text-slate-500'}`}>{period}</span>
        </div>
        <p className={`text-sm mt-2 leading-relaxed ${highlighted ? 'text-[#0D1117]/70' : 'text-slate-400'}`}>{description}</p>
      </div>

      <ul className="space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg className={`w-4 h-4 mt-0.5 shrink-0 ${highlighted ? 'text-[#0D1117]' : 'text-[#C8FF57]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className={highlighted ? 'text-[#0D1117]/80' : 'text-slate-300'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`mt-auto block w-full text-center py-3 rounded-xl font-display font-semibold text-sm transition-colors ${
          highlighted
            ? 'bg-[#0D1117] text-[#C8FF57] hover:bg-[#161B27]'
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
        }`}
      >
        {cta}
      </Link>
    </div>
  )
}
