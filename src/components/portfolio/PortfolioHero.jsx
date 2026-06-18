import React from 'react';
import { motion } from 'framer-motion';
import Silk from '../ui/Silk';

const PortfolioHero = () => (
  <section className="relative pt-36 pb-16 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-hero-glow">
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
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto relative z-10"
    >
      <div className="flex justify-center mb-6">
        <span className="section-label">Our Work</span>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
        Digital{' '}
        <span className="text-gradient">Masterpieces</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Explore our selected portfolio of high-end AI integrations, seamless web applications, and futuristic digital experiences.
      </p>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080B12] to-transparent pointer-events-none" />
  </section>
);

export default PortfolioHero;
