import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Silk from '../ui/Silk';
import CurvedLoop from '../ui/CurvedLoop';

const ServiceHero = () => (
  <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-hero-glow pt-28 pb-16">

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

    {/* Static decorative grid lines */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />

    {/* Static glow orbs */}
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-5xl mx-auto w-full px-6 mb-10">
      <div className="max-w-3xl">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="section-label">Our Services</span>
        </motion.div>

        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-slate-400 text-base font-medium uppercase tracking-widest mb-4"
        >
          Modern Solutions for Growing Businesses
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6"
        >
          Build Smarter,{' '}
          <span className="text-gradient-blue">Grow Faster</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-8"
        >
          We build fast, secure websites, apps, and smart automated systems to help your business succeed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Link to="/contact" className="btn-primary px-8 py-3.5 text-base">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/portfolio" className="btn-secondary px-8 py-3.5 text-base">
            See Examples
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Curved Service Name Loop (Full viewport width on desktop) */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="w-full relative overflow-visible z-10"
    >
      <CurvedLoop
        marqueeText="Websites & Mobile Apps ✦ Automated Workflows ✦ Interactive Tools & Chatbots ✦ Performance Upgrades ✦"
        speed={7}
        curveAmount={300}
        direction="left"
        interactive={true}
        className="text-slate-400/80 font-bold tracking-wide"
      />
    </motion.div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080B12] to-transparent pointer-events-none" />
  </div>
);

export default ServiceHero;
