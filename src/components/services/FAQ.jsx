import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Every project is different. A standard business website usually takes 4-6 weeks, while a more complex system with smart automation might take 2-4 months. We will give you a clear, guaranteed timeline during our first planning chat."
  },
  {
    question: "Do you offer ongoing support and updates?",
    answer: "Yes! We support you even after your website or system is live. We make sure everything remains safe, secure, fast, and works perfectly as your business grows."
  },
  {
    question: "Can you add smart features or automation to our current website?",
    answer: "Yes, we can connect smart systems and tools to your current website or software without having to start over from scratch."
  },
  {
    question: "What is your working process like?",
    answer: "We keep it simple. First, we chat to understand your needs. Then we create a design for your approval. After that, we build the system and show you progress updates every two weeks so you always know what is happening."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="section-label">Questions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white"
          >
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 font-[Inter] text-base"
          >
            Everything you need to know about our workflow, support, and capabilities.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500/25 bg-[#0C1018]/90 shadow-[0_0_30px_rgba(37,99,235,0.06)]'
                    : 'border-white/5 bg-[#0C1018]/40 hover:border-white/10 hover:bg-[#0C1018]/60'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-250 ${
                      isOpen ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'
                    }`} />
                    <span className={`text-base md:text-lg font-bold font-heading tracking-tight transition-colors duration-250 ${
                      isOpen ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.35)]'
                      : 'bg-white/5 border border-white/10 text-slate-400 group-hover:border-blue-500/30 group-hover:text-blue-400'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pl-14 text-slate-400 font-[Inter] text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
