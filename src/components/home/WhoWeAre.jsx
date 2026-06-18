import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react';

const principles = [
  { icon: Sparkles, title: 'Simple & Honest', desc: 'No complex tech jargon. We explain everything in plain English.' },
  { icon: Shield,   title: 'Reliable Results', desc: 'We build websites and software that just work, day in and day out.' },
  { icon: Heart,    title: 'Dedicated to You', desc: 'We listen to your goals and build exactly what your business needs.' },
];

const WhoWeAre = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % principles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="sec bg-section-alt relative overflow-hidden px-0 lg:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left — text */}
          <div className="px-6 lg:px-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="section-label">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.07 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white mb-5"
            >
              Helping your business <span className="text-gradient">succeed online</span> without the headache
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.13 }}
              className="text-slate-400 text-base leading-relaxed mb-7"
            >
              We are a team of friendly designers, developers, and thinkers. We help local businesses, startups, and growing companies create high-quality websites and custom tools. We believe that technology should make your life easier, not more complicated.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.19 }}
            >
              <Link to="/about" className="btn-secondary inline-flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Carousel of 3 principles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            className="w-full relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex w-full"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {principles.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="w-full shrink-0 px-6 lg:px-0">
                    <div className="surface-card p-5 flex items-start gap-4 min-h-[120px]">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {principles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
                    activeIndex === idx ? 'bg-blue-500 w-7' : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

