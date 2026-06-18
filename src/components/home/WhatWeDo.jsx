import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Sparkles, Globe, Code2, Mail, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSwap, { Card } from '../ui/CardSwap';

const points = [
  { 
    id: 1, 
    title: 'Smart Task Automation',   
    icon: Cpu,      
    colorClass: 'text-blue-400',   
    boxClass: 'icon-box icon-box-blue',   
    number: '01',
    description: 'We set up workflows that automate repetitive daily tasks, saving you hours of work.',
    glowClass: 'from-blue-950/40 via-[#0d101a] to-[#0d101a]', 
    borderClass: 'border-blue-500/20',
    visual: (
      <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-2 w-full max-w-[240px] mx-auto">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-[9px] text-slate-400 leading-tight">
            <p className="font-bold text-white">New Lead Email</p>
            <p className="text-slate-500">Triggers automatically</p>
          </div>
        </div>
        <div className="h-0.5 flex-grow border-t border-dashed border-blue-500/30 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-400" />
        </div>
        <div className="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
          <Database className="w-3.5 h-3.5 text-green-400" />
        </div>
      </div>
    )
  },
  { 
    id: 2, 
    title: '24/7 Support Tools', 
    icon: Sparkles, 
    colorClass: 'text-indigo-400', 
    boxClass: 'icon-box icon-box-indigo', 
    number: '02',
    description: 'Helpful chatbots that answer customer questions and handle bookings at any time.',
    glowClass: 'from-indigo-950/30 via-[#0d101a] to-[#0d101a]', 
    borderClass: 'border-indigo-500/20',
    visual: (
      <div className="mt-3 space-y-1.5 w-full max-w-[240px] mx-auto text-[9px] font-sans">
        <div className="flex justify-start">
          <div className="bg-white/5 border border-white/5 rounded-lg rounded-tl-none px-2 py-1 text-slate-300 max-w-[85%]">
            Book a slot for tomorrow?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-indigo-600 rounded-lg rounded-tr-none px-2 py-1 text-white max-w-[85%] font-medium">
            Available at 2:00 PM!
          </div>
        </div>
      </div>
    )
  },
  { 
    id: 3, 
    title: 'Business Dashboards', 
    icon: Globe,    
    colorClass: 'text-sky-400',    
    boxClass: 'icon-box icon-box-sky',    
    number: '03',
    description: 'We turn spreadsheets and numbers into clear, interactive charts to track performance.',
    glowClass: 'from-sky-950/30 via-[#0d101a] to-[#0d101a]', 
    borderClass: 'border-sky-500/20',
    visual: (
      <div className="mt-3 flex items-end justify-center gap-3.5 h-12 w-full max-w-[180px] mx-auto">
        <div className="w-5 bg-slate-800 rounded-t-sm h-[30%] relative">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[7px] text-slate-500">30%</span>
        </div>
        <div className="w-5 bg-sky-500/30 border-t border-sky-400 rounded-t-sm h-[65%] relative">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[7px] text-sky-400">65%</span>
        </div>
        <div className="w-5 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-sm h-[90%] relative shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[7px] text-white font-bold">90%</span>
        </div>
      </div>
    )
  },
  { 
    id: 4, 
    title: 'Modern Websites & Apps',   
    icon: Code2,   
    colorClass: 'text-violet-400', 
    boxClass: 'icon-box icon-box-violet', 
    number: '04',
    description: 'Beautiful, fast, and easy-to-use websites built specifically for your clients.',
    glowClass: 'from-violet-950/30 via-[#0d101a] to-[#0d101a]', 
    borderClass: 'border-violet-500/20',
    visual: (
      <div className="mt-3 p-1.5 rounded-xl bg-white/5 border border-white/5 w-full max-w-[240px] mx-auto relative overflow-hidden">
        {/* Browser Mock Header */}
        <div className="flex items-center gap-1 border-b border-white/5 pb-1 mb-1.5">
          <div className="w-1 h-1 rounded-full bg-red-500/60" />
          <div className="w-1 h-1 rounded-full bg-yellow-500/60" />
          <div className="w-1 h-1 rounded-full bg-green-500/60" />
          <div className="h-1.5 flex-grow bg-white/5 rounded-sm mx-1.5" />
        </div>
        {/* Wireframe lines */}
        <div className="space-y-1">
          <div className="h-2 bg-violet-500/10 rounded-sm w-[70%]" />
          <div className="h-1 bg-slate-700/20 rounded-sm w-full" />
          <div className="h-1 bg-slate-700/20 rounded-sm w-[85%]" />
        </div>
      </div>
    )
  },
];

const WhatWeDo = () => {
  const [dims, setDims] = useState({ width: 380, height: 320, distX: 20, distY: 30 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setDims({ width: 280, height: 260, distX: 12, distY: 18 });
      } else if (window.innerWidth < 640) {
        setDims({ width: 330, height: 280, distX: 16, distY: 24 });
      } else {
        setDims({ width: 380, height: 320, distX: 20, distY: 30 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="sec relative overflow-hidden px-6">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="section-label">Our Services</span>
            </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.07 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white mb-5"
          >
            What We Can <span className="text-gradient-blue">Build For You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.13 }}
            className="text-slate-400 text-base leading-relaxed mb-7 max-w-md"
          >
            We design and build modern digital systems that help your brand look professional, save time, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.19 }}
          >
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Right — CardSwap container */}
        <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[450px] overflow-visible">
          <CardSwap
            width={dims.width}
            height={dims.height}
            cardDistance={dims.distX}
            verticalDistance={dims.distY}
            delay={3000}
            pauseOnHover={false}
          >
            {points.map((pt) => {
              const Icon = pt.icon;
              return (
                <Card 
                  key={pt.id} 
                  className={`p-4 sm:p-6 flex flex-col justify-between border ${pt.borderClass} rounded-2xl h-full w-full bg-gradient-to-br ${pt.glowClass} text-left select-none shadow-2xl relative overflow-hidden`}
                >
                  {/* Subtle inner radial glow overlay matching theme color */}
                  <div 
                    className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: 'currentColor' }}
                  />

                  {/* Header row */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500"
                      style={{ fontFamily: 'var(--font-accent)', letterSpacing: '0.08em' }}>
                      {pt.number}
                    </span>
                    <div className={`${pt.boxClass} shrink-0`}>
                      <Icon className={`w-4 h-4 sm:w-5 h-5 ${pt.colorClass}`} />
                    </div>
                  </div>

                  {/* Main content body */}
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 tracking-tight">
                      {pt.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0.5">
                      {pt.description}
                    </p>
                    
                    {/* Visual Graphic Representation */}
                    {pt.visual}
                  </div>
                </Card>
              );
            })}
          </CardSwap>
        </div>
      </div>
    </div>
  </section>
);
};

export default WhatWeDo;
