import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Sparkles } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

const values = [
  {
    id: 1,
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every line of code and every AI model is meticulously crafted for maximum efficiency and flawless execution.',
    colorClass: 'text-blue-400',
    boxClass: 'icon-box icon-box-blue',
    number: '01',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Uncompromising Security',
    description: 'Military-grade encryption and advanced security protocols keep your data completely safe at every layer.',
    colorClass: 'text-indigo-400',
    boxClass: 'icon-box icon-box-indigo',
    number: '02',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Hyper-Performance',
    description: 'Our architectures handle massive user loads at zero latency — built for speed from the ground up.',
    colorClass: 'text-sky-400',
    boxClass: 'icon-box icon-box-sky',
    number: '03',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Futuristic Design',
    description: "We don't follow trends — we create them. Our interfaces are sleek, dynamic, and designed to inspire.",
    colorClass: 'text-violet-400',
    boxClass: 'icon-box icon-box-violet',
    number: '04',
  },
];

const AboutValues = () => (
  <section className="py-20 px-6 relative z-10 bg-section-alt">
    <div className="gradient-divider" />

    <div className="max-w-7xl mx-auto pt-1 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
      {/* Sticky Left Heading Column */}
      <div className="sticky top-[70px] lg:top-28 lg:col-span-5 lg:h-fit mb-6 lg:mb-0 text-left z-25 bg-[#05070f]/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-4 lg:py-0 border-b border-white/5 lg:border-none -mx-6 px-6 lg:mx-0 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2 lg:mb-5"
        >
          <span className="section-label text-[10px] lg:text-xs">Our Core Values</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 lg:mb-6 leading-tight"
        >
          Built on <span className="text-gradient">Principles</span> That Matter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md hidden sm:block"
        >
          The foundational principles that guide every project we undertake and every line of code we write.
        </motion.p>
      </div>

      {/* ScrollStack Right Column */}
      <div className="lg:col-span-7 w-full">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={120}
          itemScale={0.03}
          itemStackDistance={60}
          stackPosition="25%"
          scaleEndPosition="12%"
          baseScale={0.92}
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <ScrollStackItem key={v.id} itemClassName="surface-card flex flex-col group">
                {/* Number */}
                <span
                  className={`text-xs font-bold mb-4 ${v.colorClass} opacity-50`}
                  style={{ fontFamily: 'var(--font-accent)', letterSpacing: '0.1em' }}
                >
                  {v.number}
                </span>

                {/* Icon */}
                <div className={`${v.boxClass} mb-5 group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className={`w-5 h-5 ${v.colorClass}`} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </div>
    <div className="gradient-divider mt-8" />
  </section>
);

export default AboutValues;
