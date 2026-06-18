import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Silk from '../ui/Silk';

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/project',
    description: 'Perfect for small businesses establishing a modern website.',
    features: [
      'Modern & Responsive Web Design',
      'Basic Google SEO Setup',
      'Up to 5 Pages Setup',
      'Contact Forms & Maps',
      '1 Month Free Support & Updates',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$5,000',
    period: '/project',
    description: 'Ideal for growing companies needing advanced features and automation.',
    features: [
      'Everything in Starter',
      'Interactive Help Chatbot',
      'Easy-to-use Content Manager (CMS)',
      'Smooth Animations & Effects',
      'Online Store & Payment Setup',
      '3 Months Free Support & Updates',
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    name: 'Custom / Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large-scale operations requiring complex systems.',
    features: [
      'Custom Software Development',
      'Smart Task & Workflow Automation',
      'System & Software Connections',
      'Robust Cloud Hosting Setup',
      'Priority Phone & Email Support',
      'Ongoing Monthly Maintenance',
    ],
    popular: false,
    cta: 'Contact Us',
  },
];

const ServicePricing = () => (
  <section className="py-24 relative overflow-hidden bg-section-alt px-6">
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

    <div className="gradient-divider relative z-10" />

    <div className="container mx-auto max-w-6xl pt-1 relative z-10">
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <span className="section-label">Pricing Plans</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          Simple & Transparent <span className="text-gradient-blue">Pricing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-slate-500 max-w-xl mx-auto"
        >
          Invest in clean, high-quality digital solutions for your business. No hidden fees.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col rounded-2xl p-8 h-full
              ${plan.popular ? 'card-featured md:-mt-4 md:mb-4' : 'surface-card'}`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full border border-blue-400/30 shadow-lg">
                <Zap className="w-3 h-3" /> Most Popular
              </div>
            )}

            {/* Plan header */}
            <div className="mb-7">
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.popular ? 'text-blue-400' : 'text-slate-500'}`}
                style={{ fontFamily: 'var(--font-accent)' }}>
                {plan.name}
              </p>
              <div className="flex items-end gap-1.5 mb-3">
                <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-slate-500 text-sm pb-1">{plan.period}</span>}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
            </div>

            {/* Divider */}
            <div className="hr-fade mb-6" />

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-400' : 'text-slate-500'}`} />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/contact"
              className={plan.popular ? 'btn-primary w-full justify-center text-sm py-3' : 'btn-secondary w-full justify-center text-sm py-3'}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-slate-600 text-xs mt-10"
      >
        All plans include a free planning call · Prices vary based on requirements
      </motion.p>
    </div>
    <div className="gradient-divider mt-8" />
  </section>
);

export default ServicePricing;
