import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const AboutPreview = () => {
  const highlights = [
    {
      icon: <Target size={22} />,
      title: 'Mission Driven',
      desc: 'We solve real business problems with intelligent, scalable technology.',
    },
    {
      icon: <Lightbulb size={22} />,
      title: 'Innovation First',
      desc: 'Pushing boundaries with AI, automation, and cutting-edge development.',
    },
    {
      icon: <Users size={22} />,
      title: 'Client Focused',
      desc: 'Your vision is our blueprint — every project is uniquely crafted.',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Crafting <span className="text-gradient">Intelligent</span> Digital Experiences
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              IrahNexAI is a forward-thinking agency that blends artificial intelligence
              with creative design to build products that matter. From startups to enterprises,
              we deliver solutions that accelerate growth and redefine possibilities.
            </motion.p>

            <motion.div variants={fadeUp} custom={3}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Highlight cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="glass-card p-6 flex items-start gap-5 group hover:border-primary/15 transition-all duration-300"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(123,45,255,0.1))',
                    border: '1px solid rgba(0,245,255,0.1)',
                  }}
                >
                  <span className="text-primary">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
