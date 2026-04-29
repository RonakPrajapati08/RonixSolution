import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import JobCard from '../components/JobCard'
import { careers, team } from '../data'

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 bg-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C8FF57]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-5 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
          Join Our Team
        </span>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl mx-auto">
          We're hiring<br />
          <span className="text-gradient">world-class builders</span>
        </h1>
        <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Help us build the future of digital products. Join a team that ships fast, thinks big, and values quality above all.
        </p>
      </div>
    </section>
  )
}

function OpenPositions() {
  const [selectedDept, setSelectedDept] = useState('All')

  const departments = ['All', 'Engineering', 'Design', 'Infrastructure', 'Operations']
  const filtered = selectedDept === 'All' ? careers : careers.filter(j => j.department === selectedDept)

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Open Roles"
        title="We're actively hiring"
        subtitle="Browse open positions and apply today."
      />

      {/* Department filter */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {departments.map(dept => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-5 py-2.5 rounded-lg font-mono text-sm font-semibold transition-all ${
              selectedDept === dept
                ? 'bg-[#C8FF57] text-[#0D1117]'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Job listings */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((job) => (
          <Link key={job.id} to={`/careers/${job.id}`}>
            <JobCard {...job} />
          </Link>
        ))}
      </div>
    </section>
  )
}

function Culture() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Company Culture"
          title="Built by builders, for builders"
          subtitle="We believe great work comes from happy, challenged, and well-supported people."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Ship Fast',
              description: 'We value speed without sacrificing quality. Decisions are made quickly, handoffs are minimized, and deployment happens daily.',
              icon: '⚡'
            },
            {
              title: 'Think Big',
              description: 'Work on projects that matter. We work with ambitious clients solving real problems that affect millions of users.',
              icon: '🚀'
            },
            {
              title: 'Continuous Learning',
              description: 'Yearly learning budget, conference attendance, and access to top courses. We invest in your growth.',
              icon: '📚'
            },
            {
              title: 'Async-First',
              description: 'Remote-first company with team members across time zones. Clear documentation and async communication.',
              icon: '🌍'
            },
            {
              title: 'Quality Obsessed',
              description: 'Code reviews on every PR. Design systems. Testing frameworks. We don\'t compromise on quality.',
              icon: '✨'
            },
            {
              title: 'Transparent',
              description: 'No politics. Open financials shared with the team. Honest conversations about challenges and wins.',
              icon: '💡'
            },
          ].map((item, i) => (
            <div key={i} className="card-glass rounded-2xl p-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HiringProcess() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Hiring Process"
        title="How we hire"
        subtitle="Fair, transparent, and focused on what matters."
      />

      <div className="grid md:grid-cols-5 gap-4 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-8 left-[5%] right-[5%] h-px bg-gradient-to-r from-[#C8FF57] to-[#60CFFF] opacity-20" />

        {[
          { step: '01', title: 'Apply', desc: 'Submit your application with resume and portfolio (if applicable).' },
          { step: '02', title: 'Screening', desc: 'Quick call with our recruiting team to understand fit.' },
          { step: '03', title: 'Technical', desc: 'Take-home project or technical interview with our team leads.' },
          { step: '04', title: 'Interview', desc: 'Meet with the team you\'d be working with. Ask us anything.' },
          { step: '05', title: 'Offer', desc: 'We move fast. Decisions made within a week of final interview.' },
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className="card-glass rounded-2xl p-6 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C8FF57] text-[#0D1117] font-display font-bold text-sm mb-4">
                {item.step}
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Benefits & Perks"
          title="We take care of our team"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '💰', title: 'Competitive Salary', desc: 'Market rates with annual reviews and bonuses.' },
            { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive health, dental, and vision coverage.' },
            { icon: '🏠', title: 'Remote First', desc: 'Work from anywhere. Equipment budget provided.' },
            { icon: '🛫', title: 'Paid Time Off', desc: '15+ days PTO + 10 public holidays annually.' },
            { icon: '📚', title: 'Learning Budget', desc: '₹50k yearly for courses, books, and conferences.' },
            { icon: '💻', title: 'Equipment', desc: 'Top-tier laptop and equipment of your choice.' },
            { icon: '🎓', title: 'Professional Growth', desc: 'Mentorship and clear career progression.' },
            { icon: '🎉', title: 'Team Events', desc: 'Annual company retreat and team activities.' },
          ].map((perk, i) => (
            <div key={i} className="card-glass rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{perk.icon}</div>
              <h4 className="font-display font-semibold text-white text-sm mb-1">{perk.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamPreview() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Meet The Team"
        title="The people behind RonixSolution"
        subtitle="A diverse group of experienced builders passionate about quality and impact."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <div key={member.name} className="card-glass rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C8FF57] to-[#60CFFF] flex items-center justify-center text-[#0D1117] font-display font-bold text-lg shrink-0">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-sm">{member.name}</h4>
                <p className="text-[#C8FF57] text-xs font-mono">{member.role}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 text-center">
      <div className="card-glass rounded-2xl p-12 border border-[#C8FF57]/20">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          Ready to join us?
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Browse our open positions and submit your application. We respond to every submission.
        </p>
        <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold rounded-lg hover:bg-[#d4ff70] transition-colors">
          View Open Positions
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </section>
  )
}

export default function Careers() {
  return (
    <>
      <PageHero />
      <OpenPositions />
      <Culture />
      <HiringProcess />
      <Benefits />
      <TeamPreview />
      <CTA />
    </>
  )
}
