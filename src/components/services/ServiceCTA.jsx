import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import ElectricBorder from '../ui/ElectricBorder';

const ServiceCTA = () => (
  <section className="py-12 md:py-20 px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <ElectricBorder
          color="#2563EB"
          speed={1.0}
          chaos={0.02}
          borderRadius={16}
        >
          <div className="glass-card rounded-2xl px-6 py-10 md:px-12 md:py-12 text-center relative overflow-hidden" style={{ border: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.45)' }}>
            {/* Subtle inner premium gradient */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none" 
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.15), transparent 70%)' }} 
            />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-4"
              >
                <span className="section-label text-[10px] py-1 px-2.5">Let's Work Together</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight"
              >
                Ready to Build Your <span className="text-gradient-blue">Project?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-sm md:text-base text-slate-400 mb-8 max-w-md leading-relaxed"
              >
                Let's talk about your project and see how we can build the perfect website or software for you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              >
                <Link to="/contact" className="btn-primary px-6 py-2.5 text-xs md:text-sm justify-center">
                  <Calendar className="w-4 h-4" /> Schedule a Call
                </Link>
                <Link to="/pricing" className="btn-secondary px-6 py-2.5 text-xs md:text-sm justify-center">
                  View Pricing <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </ElectricBorder>
      </motion.div>
    </div>
  </section>
);

export default ServiceCTA;
