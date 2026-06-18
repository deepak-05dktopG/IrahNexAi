import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  'Smart Chatbots for Customers',
  'Automatic Email & Text Systems',
  'Daily Task & File Automation',
  'Easy Business Dashboards & Reports',
];

const highlights = [
  { value: '24/7', label: 'Availability' },
  { value: 'Save', label: 'Hours Weekly' },
  { value: 'Fast', label: 'Setup Time' },
];

const FeaturedService = () => (
  <section className="py-24 relative overflow-hidden px-6">
    <div className="gradient-divider" />

    {/* Static glow */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto max-w-7xl pt-1">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
            {/* Static gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-indigo-900/20 mix-blend-overlay z-10" />
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
              alt="AI Technology"
              className="w-full h-full object-cover"
            />

            {/* Static stat chip — no animation */}
            <div className="absolute bottom-6 right-6 z-20 surface-card p-4 flex items-center gap-3 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-blue-400 font-extrabold text-xs">AI</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Reliable Software</p>
                <p className="text-blue-400 font-semibold text-xs">Easy Support</p>
              </div>
            </div>
          </div>

          {/* Mini metric strip below image */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {highlights.map(({ value, label }) => (
              <div key={label} className="surface-card py-4 px-3 text-center">
                <p className="text-white font-extrabold text-xl tracking-tight mb-0.5">{value}</p>
                <p className="text-slate-600 text-xs uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="w-full lg:w-1/2"
        >
          <div className="mb-5">
            <span className="section-label">Featured Capability</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Smart Tools &{' '}
            <span className="text-gradient-blue">Automations</span>
          </h2>

          <p className="text-slate-400 mb-8 text-base leading-relaxed">
            We create smart tools that help you run your business automatically. We link these features directly into your website or current software, making your daily work easier and saving you time.
          </p>

          <ul className="space-y-3.5 mb-10">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
    <div className="gradient-divider mt-8" />
  </section>
);

export default FeaturedService;
