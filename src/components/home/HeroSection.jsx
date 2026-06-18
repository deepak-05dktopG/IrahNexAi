import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import Silk from '../ui/Silk';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

/* Floating chips — simplified, real values/features */
const chips = [
  { icon: Zap,    label: 'Delivery Time',   value: 'Weeks, Not Months', color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Shield, label: 'System Support',  value: 'Always Secure',     color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  { icon: Globe,  label: 'Setup & Launch',  value: 'Fully Handled',     color: 'text-sky-400',    bg: 'bg-sky-500/10 border-sky-500/20' },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-glow pt-24 pb-16 px-6">

    {/* Silk Animation Background */}
    <div className="absolute inset-0 pointer-events-none z-0 opacity-70">
      <Silk
        speed={5}
        scale={0.9}
        color="#5227FF"
        noiseIntensity={0.5}
        rotation={0.4}
      />
    </div>

    {/* Fine grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />

    {/* Glow orbs — static, CSS only */}
    <div className="absolute top-1/4 left-1/3  w-[500px] h-[500px] bg-blue-700/10   rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-indigo-700/10 rounded-full blur-[100px] pointer-events-none" />

    {/* ── Content ── */}
    <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">

      {/* Badge */}
      <motion.div {...fadeUp(0)} className="mb-8">
        <span className="section-label animate-badge-pulse">
          <span className="dot-blue" />
          Modern Web & Smart Software
        </span>
      </motion.div>

      {/* Eyebrow */}
      <motion.p {...fadeUp(0.07)} className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
        Professional Digital Solutions for Your Business
      </motion.p>

      {/* Main Headline */}
      <motion.h1
        {...fadeUp(0.12)}
        className="text-white font-extrabold leading-[1.05] tracking-tight mb-6"
        style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', fontFamily: 'var(--font-heading)' }}
      >
        Transform Your Business<br />
        with <span className="text-gradient-brand">Smart Technology</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
      >
        We build modern websites, apps, and helpful automated tools that make your business run smoother, load faster, and grow.
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(0.28)} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
        <Link to="/contact" className="btn-primary px-8 py-3.5 text-sm">
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/services" className="btn-secondary px-8 py-3.5 text-sm">
          Explore Services
        </Link>
      </motion.div>

      {/* Stat chips row */}
      {/* <motion.div
        {...fadeUp(0.36)}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {chips.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${bg} backdrop-blur-sm`}>
            <Icon className={`w-4 h-4 ${color} shrink-0`} />
            <div className="text-left">
              <p className={`text-xs font-bold ${color}`}>{value}</p>
              <p className="text-xs text-slate-600 uppercase tracking-wider">{label}</p>
            </div>
          </div>
        ))}
      </motion.div> */}
    </div>

    {/* Bottom gradient fade into next section */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070F] to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
