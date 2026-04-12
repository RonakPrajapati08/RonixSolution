import SectionHeader from '../components/SectionHeader'
import TeamCard from '../components/TeamCard'
import { team } from '../data'
import { Link } from 'react-router-dom'

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 bg-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#60CFFF]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          About NexusLab
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl">
          Built by builders,<br />for builders
        </h1>
        <p className="mt-6 text-slate-400 text-xl max-w-2xl leading-relaxed">
          We're a remote-first digital agency founded on a single idea: great software should be the norm, not the exception.
        </p>
      </div>
    </section>
  )
}

function CompanyIntro() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
            Our story
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            NexusLab started in 2019 when three engineers — tired of watching agencies charge enterprise prices for junior work — decided to do it differently. We built our first product for a seed-stage startup, and they exited 18 months later.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Word spread. Today we're a team of 24 specialists across engineering, design, and strategy, working with companies from pre-seed to Series C across every major industry.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Our north star hasn't changed: build excellent products, communicate honestly, and treat clients like partners rather than tickets.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Founded', value: '2019', sub: 'San Francisco, CA' },
            { label: 'Team', value: '24', sub: 'Across 8 time zones' },
            { label: 'Projects', value: '120+', sub: 'Shipped to production' },
            { label: 'Retention', value: '91%', sub: 'Clients return or refer' },
          ].map(({ label, value, sub }) => (
            <div key={label} className="card-glass rounded-2xl p-6">
              <div className="font-display font-bold text-4xl text-white">{value}</div>
              <div className="text-[#C8FF57] text-sm font-semibold mt-1">{label}</div>
              <div className="text-slate-500 text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Purpose"
          title="Mission & Vision"
          subtitle="The principles that guide every decision we make."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-glass rounded-2xl p-8">
            <div className="w-10 h-10 rounded-xl bg-[#C8FF57]/10 flex items-center justify-center text-[#C8FF57] mb-5 text-lg">◎</div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To deliver software that genuinely moves the needle for our clients — shipped on time, built to last, and designed with the end user at the center of every decision.
            </p>
          </div>
          <div className="card-glass rounded-2xl p-8">
            <div className="w-10 h-10 rounded-xl bg-[#60CFFF]/10 flex items-center justify-center text-[#60CFFF] mb-5 text-lg">◇</div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              A world where every ambitious founder and enterprise team has access to the same caliber of engineering talent that the best tech companies in the world rely on.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-6">
          {[
            { title: 'Senior-only talent', desc: 'Every engineer has 5+ years of production experience. No juniors learning on your dime.' },
            { title: 'Radical transparency', desc: 'Weekly progress reports, live project dashboards, and honest updates — good or bad.' },
            { title: 'Outcome-focused', desc: 'We measure success by your business metrics, not just delivery milestones.' },
          ].map(({ title, desc }) => (
            <div key={title} className="card-glass rounded-2xl p-6">
              <div className="w-2 h-2 rounded-full bg-[#C8FF57] mb-4" />
              <h4 className="font-display font-semibold text-white mb-2">{title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="The Team"
        title="Meet the people behind the work"
        subtitle="Experienced, async-native, and genuinely passionate about craft."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((member, i) => (
          <TeamCard key={member.name} {...member} index={i} />
        ))}
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    { icon: '⚡', title: 'Fast iteration', desc: 'Most projects move to staging within 2 weeks. We believe in shipping early and improving fast.' },
    { icon: '🔒', title: 'Code you own', desc: 'Full source code handoff. No lock-in, no proprietary frameworks — just clean, documented code.' },
    { icon: '📊', title: 'Business-first thinking', desc: 'We ask "why?" before "how?". Every feature is evaluated against your business goals.' },
    { icon: '🌍', title: 'Async-first team', desc: 'Global team means near-24/7 coverage. Progress happens while you sleep.' },
    { icon: '✅', title: 'Fixed-price projects', desc: 'Agree on scope and price upfront. No surprise invoices, no scope creep billing.' },
    { icon: '🤝', title: 'Long-term partners', desc: '91% of clients work with us again. We invest in understanding your business deeply.' },
  ]
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why NexusLab"
          title="What makes us different"
          subtitle="Plenty of agencies will take your money. Here's why clients keep coming back to us."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="card-glass rounded-2xl p-6 flex gap-4">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161B27] to-[#0D1117] border border-white/8 p-14 text-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8FF57]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl text-white max-w-xl mx-auto">
            Want to join the team?
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            We're always looking for exceptional engineers and designers. Say hello.
          </p>
          <Link to="/contact" className="inline-block mt-8 px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold rounded-xl hover:bg-[#d4ff70] transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero />
      <CompanyIntro />
      <MissionVision />
      <Team />
      <WhyUs />
      <AboutCTA />
    </>
  )
}
