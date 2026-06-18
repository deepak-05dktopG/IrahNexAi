import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import ElectricBorder from '../ui/ElectricBorder';

const CallToAction = () => (
  <section className="sec relative overflow-hidden px-6">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-blue-600/7 rounded-full blur-3xl" />
    </div>

    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <ElectricBorder
          color="#2563EB"
          speed={1.0}
          chaos={0.02}
          borderRadius={24}
        >
          <div className="card-featured rounded-3xl px-8 py-14 md:px-14 text-center relative overflow-hidden" style={{ border: 'none', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.12), transparent)' }} />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.07 }}
                className="mb-5"
              >
                <span className="section-label">Get Started Today</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
              >
                Ready to <span className="text-gradient-blue">Innovate?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.15 }}
                className="text-base text-slate-400 max-w-md mx-auto leading-relaxed mb-8"
              >
                Let's turn your vision into a digital reality. Partner with IrahNexAI
                to build the future of your business with AI and modern technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <Link to="/contact" className="btn-primary px-8 py-3 text-sm">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary px-8 py-3 text-sm">
                  <Mail className="w-4 h-4" /> Send a Message
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.28 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600"
              >
                {['Free consultation call', 'Response within 24 hours', 'No commitment required'].map((item, i) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${['bg-green-500','bg-blue-500','bg-indigo-500'][i]}`} />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </ElectricBorder>
      </motion.div>
    </div>
  </section>
);

export default CallToAction;
