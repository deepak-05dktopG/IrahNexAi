import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Stack from '../ui/Stack';

const testimonials = [
  { id: 1, name: 'Sarah Miller',  company: 'Local Boutique Shop', role: 'Business Owner', rating: 5,
    feedback: 'IrahNex built our online store, and the booking system works like a charm. Our customers love how easy it is to use on their phones.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' },
  { id: 2, name: 'David Chen', company: 'Brightside Agency',   role: 'Director',  rating: 5,
    feedback: 'They automated our client onboarding process. What used to take hours of manual copy-pasting now happens automatically in minutes. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
  { id: 3, name: 'Emily Taylor',  company: 'Consulting Group',  role: 'Founder',              rating: 5,
    feedback: 'The team was incredibly patient with us. They explained everything in plain English, helped us design a beautiful website, and supported us all the way.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop' },
  { id: 4, name: 'Marcus Brody', company: 'Logistics LLC',       role: 'Manager',          rating: 5,
    feedback: 'Our new client portal is clean, fast, and easy to navigate. We saw a noticeable increase in client satisfaction in the very first month.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop' },
];

const Testimonials = () => {
  const cards = testimonials.map((t) => (
    <div 
      key={t.id} 
      className="p-6 md:p-8 flex flex-col justify-between h-full w-full rounded-2xl border border-white/10 bg-[#0d101a]/90 shadow-2xl select-none"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-0.5">
            {[...Array(t.rating)].map((_, j) => (
              <Star key={j} size={12} fill="currentColor" className="text-blue-500" />
            ))}
          </div>
          <Quote size={20} className="text-blue-700/30" />
        </div>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed italic mb-6">
          "{t.feedback}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <img 
          src={t.avatar} 
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0" 
        />
        <div className="min-w-0">
          <p className="text-white text-sm font-semibold truncate">{t.name}</p>
          <p className="text-slate-600 text-xs truncate">{t.role}, {t.company}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="sec bg-section-alt relative overflow-hidden px-6">
      {/* Background glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Header & info */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Client Reviews</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white font-heading"
            >
              What Our <br className="hidden lg:block" />
              Clients <span className="text-gradient">Say</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.13 }}
              className="text-slate-400 text-base leading-relaxed max-w-sm mx-auto lg:mx-0"
            >
              Real feedback from business owners and managers. Swipe, drag, or click the cards to read their stories.
            </motion.p>
          </div>

          {/* Right Side: Interactive Stack */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="w-full max-w-[340px] sm:max-w-[380px] h-[340px] md:h-[350px]">
              <Stack
                randomRotation={true}
                autoplay={true}
                sensitivity={300}
                sendToBackOnClick={true}
                cards={cards}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
