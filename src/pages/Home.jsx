import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import PricingCard from '../components/PricingCard'
import { services, projects, testimonials, pricingPlans, technologies, clients, processSteps } from '../data'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


/* ── HERO ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-16">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C8FF57]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-[#60CFFF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF57] animate-pulse" />
          <span className="text-xs font-mono text-slate-400 tracking-wider">Now accepting projects for Q3 2025</span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-white max-w-5xl mx-auto">
          We build digital
          <br />
          <span className="text-gradient">products that scale</span>
        </h1>

        <p className="mt-7 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Full-stack agency crafting web apps, mobile products, and design systems for startups and enterprises that move fast.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold text-base rounded-xl hover:bg-[#d4ff70] transition-colors">
            Start a Project
          </Link>
          <Link to="/projects" className="px-8 py-4 bg-white/5 text-white font-display font-semibold text-base rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            View Our Work
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-20 inline-grid grid-cols-3 divide-x divide-white/10 bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
          {[
            { n: '50+', label: 'Projects Shipped' },
            { n: '₹25M+', label: 'Client Revenue Generated' },
            { n: '99%', label: 'Client Satisfaction' },
          ].map(({ n, label }) => (
            <div key={label} className="px-8 py-5 text-center">
              <div className="font-display font-bold text-2xl text-white">{n}</div>
              <div className="text-xs text-slate-500 mt-0.5 whitespace-nowrap">{label}</div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            '✓ 5-star reviews on Clutch',
            '✓ ISO 27001 Certified',
            '✓ SOC 2 Type II Compliant',
            '✓ NDA Protected',
          ].map((badge) => (
            <span key={badge} className="text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-400">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CLIENTS ───────────────────────────────────────────────── */
function Clients() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <p className="text-center text-xs font-mono tracking-widest text-slate-500 uppercase mb-10">
        Trusted by Leading Companies
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center gap-3 px-5 py-3 bg-white/3 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
            <span className="text-2xl">{client.logo}</span>
            <span className="font-display font-semibold text-white text-sm">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── ABOUT PREVIEW ─────────────────────────────────────────── */
function AboutPreview() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-block text-xs font-mono tracking-widest text-[#C8FF57] uppercase mb-4 px-3 py-1.5 bg-[#C8FF57]/10 rounded-full border border-[#C8FF57]/20">
            Who We Are
          </span>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mt-2">
            Building digital solutions that drive real business growth
          </h2>

          <p className="mt-5 text-slate-400 leading-relaxed">
            RonixSolution is a modern web development agency focused on delivering custom digital solutions 
            tailored to your business needs. We build high-performance websites, web applications, and tools 
            that help businesses improve efficiency, enhance user experience, and scale faster.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Our approach is simple — understand your requirements, design smart solutions, and develop systems 
            that are reliable, secure, and built for long-term growth.
          </p>

          {/* CTA */}
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 mt-8 text-[#C8FF57] font-display font-semibold text-sm hover:gap-3 transition-all"
          >
            Explore More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              label: "Projects Delivered",
              value: "100+",
              sub: "Custom websites & applications",
            },
            {
              label: "Happy Clients",
              value: "50+",
              sub: "Trusted by growing businesses",
            },
            {
              label: "Years Experience",
              value: "5+",
              sub: "In web development & tech",
            },
            {
              label: "Client Satisfaction",
              value: "95%",
              sub: "Long-term partnerships built",
            },
          ].map(({ label, value, sub }) => (
            <div key={label} className="card-glass rounded-2xl p-6">
              <div className="font-display font-bold text-4xl text-white">
                {value}
              </div>
              <div className="text-[#C8FF57] text-sm font-semibold mt-1">
                {label}
              </div>
              <div className="text-slate-500 text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function Process() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={ref} className="py-28 bg-[#080B12]">
      <div className="max-w-5xl mx-auto px-6">

        <SectionHeader
          eyebrow="How We Work"
          title="A simple process built on clarity and trust"
          subtitle="We follow a step-by-step approach so you always know what’s happening and what comes next."
        />

        <div className="relative mt-16">

          {/* Base Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          {/* Animated Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-[#C8FF57] to-[#60CFFF]"
          />

          <div className="space-y-14">

            {processSteps.map((item, i) => {

              const progress = useTransform(
                scrollYProgress,
                [i * 0.18, (i + 1) * 0.18],
                [0, 1]
              )

              const opacity = useTransform(progress, [0, 1], [0.3, 1])
              const x = useTransform(progress, [0, 1], [40, 0])
              const scale = useTransform(progress, [0, 1], [0.95, 1])
              const bgFill = useTransform(progress, [0, 1], ["#ffffff20", "#C8FF57"])

              return (
                <motion.div
                  key={i}
                  style={{ opacity, x, scale }}
                  className="flex items-start gap-6 group"
                >

                  {/* Step Circle */}
                  <motion.div
                    style={{ backgroundColor: bgFill }}
                    className="w-12 h-12 flex items-center justify-center rounded-full 
                    text-[#0D1117] font-display font-bold text-sm z-10 shadow-lg"
                  >
                    {item.step}
                  </motion.div>

                  {/* Card */}
                  <div className="card-glass rounded-2xl p-6 w-full 
                    transition-all duration-300 group-hover:-translate-y-1">

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="font-display font-semibold text-white text-xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              )
            })}

          </div>

        </div>

        {/* CTA (VERY IMPORTANT) */}
        <div className="mt-20 text-center">

          <h3 className="text-white font-display text-2xl mb-4">
            Ready to turn your idea into a real product?
          </h3>

          <p className="text-slate-400 mb-6">
            Let’s build something that actually grows your business.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#C8FF57] text-[#0D1117] font-semibold rounded-lg hover:bg-[#d4ff70] transition"
          >
            Start Your Project
          </Link>

        </div>

      </div>
    </section>
  )
}


/* ── SERVICES OVERVIEW ─────────────────────────────────────── */
function ServicesOverview() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="What We Do"
        title="Services built for modern products"
        subtitle="From the first pixel to the last deployment — we cover the full stack."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.slice(0, 6).map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-display font-semibold text-slate-400 hover:text-white transition-colors">
          Explore all services
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </section>
  )
}

/* ── TECHNOLOGIES ──────────────────────────────────────────── */
function Technologies() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools we master"
          subtitle="We work with the best tools in the industry — no fads, just proven technology."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map(({ name, category }) => (
            <div key={name} className="flex items-center gap-2.5 px-4 py-2.5 card-glass rounded-xl hover:border-white/15 transition-colors">
              <span className="text-white font-display font-semibold text-sm">{name}</span>
              <span className="text-xs font-mono text-slate-600">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FEATURED PROJECTS ─────────────────────────────────────── */
function FeaturedProjects() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Our Work"
        title="Projects we're proud of"
        subtitle="Real products. Real results. Real businesses that grew."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.slice(0, 6).map((p, i) => (
          <Link key={p.title} to={`/case-study/${p.title.toLowerCase().replace(/ /g, '-')}`}>
            <ProjectCard {...p} index={i} />
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-display font-semibold text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
          View all projects
        </Link>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ──────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Client Love"
          title="Don't take our word for it"
          subtitle="Here's what the founders and CTOs we work with have to say."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PRICING PREVIEW ───────────────────────────────────────── */
function PricingPreview() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Pricing"
        title="Transparent, no-surprise pricing"
        subtitle="Fixed-price projects. No hourly billing. No hidden fees."
      />
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.plan} {...plan} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/pricing" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
          Compare plans in detail →
        </Link>
      </div>
    </section>
  )
}

/* ── CORE VALUES ───────────────────────────────────────────── */
function CoreValues() {
  const values = [
    {
      title: 'Quality-Driven Approach',
      icon: (
        <svg className="w-6 h-6 text-[#C8FF57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Transparent Work Culture',
      icon: (
        <svg className="w-6 h-6 text-[#60CFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'High Standards of Service',
      icon: (
        <svg className="w-6 h-6 text-[#C8FF57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 8a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Passion for Excellence',
      icon: (
        <svg className="w-6 h-6 text-[#60CFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovative Thinking',
      icon: (
        <svg className="w-6 h-6 text-[#C8FF57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.657 5.657l-.707.707M9 19.071V20m0-16.071v1.07" />
        </svg>
      ),
    },
    {
      title: 'Problem-Solving Mindset',
      icon: (
        <svg className="w-6 h-6 text-[#60CFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'On-Time Delivery Commitment',
      icon: (
        <svg className="w-6 h-6 text-[#C8FF57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Long-Term Partnerships',
      icon: (
        <svg className="w-6 h-6 text-[#60CFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 8.646 4 4 0 010-8.646M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-24 bg-[#080B12] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-[#60CFFF]/4 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#C8FF57]/3 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Driving Results That Matter
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine innovation, experience, and a deep understanding of business needs to deliver solutions that create real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <div
              key={i}
              className="card-glass rounded-xl p-6 flex flex-col items-center text-center border border-white/10 hover:border-[#C8FF57]/30 hover:scale-[1.03] transition-all duration-300 group cursor-default"
            >
              <div className="mb-4 p-3 rounded-lg bg-white/5 group-hover:bg-[#C8FF57]/10 transition-colors">
                {value.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-sm">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── INDUSTRIES WE SERVE ───────────────────────────────────── */
function IndustriesWeServe() {
  const industries = [
    { name: 'Real Estate', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2.423-12h13.154l2.423 12m-18 0h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8zM9 8h6m-3 4v4" />
      </svg>
    )},
    { name: 'Jobs & Recruitment', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    )},
    { name: 'Matrimonial Platforms', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )},
    { name: 'B2B / B2C Businesses', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )},
    { name: 'E-Commerce', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )},
    { name: 'Education & Schools', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.75 2.5 10.5 2.5 15.5s4 8.75 9.5 9.5m0-13c5.5.75 9.5 4.5 9.5 9.5s-4 8.75-9.5 9.5" />
      </svg>
    )},
    { name: 'Travel & Hospitality', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 5m0 0l-3-5m3 5v6" />
      </svg>
    )},
    { name: 'Healthcare', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
            Empowering Industries Through Technology
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            We build tailored digital solutions for a wide range of industries — helping businesses streamline operations, improve efficiency, and scale faster.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold rounded-xl hover:bg-[#d4ff70] transition-colors"
          >
            Get a Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Right Column - Industries Grid */}
        <div className="grid grid-cols-2 gap-4">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="card-glass rounded-xl p-6 flex flex-col items-center text-center border border-[#60CFFF]/30 hover:border-[#C8FF57] hover:scale-[1.03] transition-all duration-300 group cursor-default"
            >
              <div className="mb-3 p-3 rounded-lg bg-[#60CFFF]/10 group-hover:bg-[#C8FF57]/10 transition-colors text-[#60CFFF] group-hover:text-[#C8FF57]">
                {industry.icon}
              </div>
              <p className="text-slate-300 text-sm font-display font-semibold">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ───────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C8FF57] to-[#60CFFF] p-14 text-center">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0D1117] leading-tight max-w-2xl mx-auto">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-[#0D1117]/70 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll get back to you within 24 hours with a plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/contact" className="px-8 py-4 bg-[#0D1117] text-[#C8FF57] font-display font-bold text-base rounded-xl hover:bg-[#161B27] transition-colors">
              Start a Conversation
            </Link>
            <Link to="/blog" className="px-8 py-4 bg-[#0D1117]/10 text-[#0D1117] font-display font-semibold text-base rounded-xl hover:bg-[#0D1117]/20 transition-colors">
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── HOME CONTACT SECTION ──────────────────────────────────── */
function HomeContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const projectTypes = ['Web Application', 'Mobile App', 'UI/UX Design', 'E-Commerce', 'API Development', 'Other']
  const budgets = ['₹10k – ₹15k', '₹20k – ₹30k', '₹30k – ₹50k', '₹50k+', 'Not sure yet']

  const handle = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#C8FF57]/50 focus:bg-white/8 transition-colors"

  if (submitted) {
    return (
      <section className="relative py-24 bg-[#080B12] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#60CFFF]/4 blur-[140px] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="card-glass rounded-2xl p-16 text-center flex flex-col items-center gap-5 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#C8FF57]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#C8FF57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-3xl text-white">Message received!</h3>
              <p className="text-slate-400 mt-3 text-lg">We'll get back to you within 24 hours with a clear plan and next steps.</p>
            </div>
            <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Send another message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 bg-[#080B12] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#60CFFF]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#C8FF57]/3 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Info + Trust */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
                Let's Build Something Powerful Together
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-3">
                Have an idea, project, or business challenge? We help you turn it into a scalable digital solution. Get in touch for a free consultation — no pressure, just clear guidance.
              </p>
              <p className="text-slate-500 text-sm">
                Typically we respond within 24 hours with a clear plan and next steps.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#C8FF57]/10 flex items-center justify-center text-[#C8FF57] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-0.5">Email</p>
                  <p className="text-white text-sm font-semibold">hello@ronixsolution.io</p>
                  <p className="text-slate-500 text-xs">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#60CFFF]/10 flex items-center justify-center text-[#60CFFF] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-0.5">Phone</p>
                  <p className="text-white text-sm font-semibold">+91 99254 35830</p>
                  <p className="text-slate-500 text-xs">Mon–Sun, 9am–9pm IST</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#C8FF57]/10 flex items-center justify-center text-[#C8FF57] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-0.5">Office</p>
                  <p className="text-white text-sm font-semibold">340 Pine Street, Suite 800</p>
                  <p className="text-slate-500 text-xs">Vastrapur, Ahmedabad 380015</p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="card-glass rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#C8FF57] animate-pulse" />
                <span className="text-white text-sm font-display font-semibold">Currently available</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                We're accepting new projects starting Q3 2025. Limited slots available — reach out early to secure your spot.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <form onSubmit={submit} className="card-glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">Your Name *</label>
                  <input required value={form.name} onChange={handle('name')} placeholder="Alex Johnson" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">Email Address *</label>
                  <input required type="email" value={form.email} onChange={handle('email')} placeholder="alex@company.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2">Company / Project Name</label>
                <input value={form.company} onChange={handle('company')} placeholder="Acme Inc." className={inputClass} />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">Project Type</label>
                  <select value={form.type} onChange={handle('type')} className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>Select type...</option>
                    {projectTypes.map(t => <option key={t} value={t} className="bg-[#1E2535]">{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">Estimated Budget</label>
                  <select value={form.budget} onChange={handle('budget')} className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>Select range...</option>
                    {budgets.map(b => <option key={b} value={b} className="bg-[#1E2535]">{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2">Tell us about your project *</label>
                <textarea
                  required
                  value={form.message}
                  onChange={handle('message')}
                  rows={5}
                  placeholder="Describe your idea, goals, timeline, and any specific features you need..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className="w-full py-4 bg-[#C8FF57] text-[#0D1117] font-display font-bold text-sm rounded-xl hover:bg-[#d4ff70] transition-colors">
                Get Free Consultation →
              </button>

              <p className="text-xs text-slate-600 text-center">No spam. No hidden costs. Just honest guidance.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PAGE ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <AboutPreview />
      <Process />
      <ServicesOverview />
      <Technologies />
      <FeaturedProjects />
      <Testimonials />
      <CoreValues />
      <IndustriesWeServe />
      <PricingPreview />
      <CTA />
      <HomeContactSection />
    </>
  )
}
