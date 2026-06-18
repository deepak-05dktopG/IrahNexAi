import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Carousel from '../ui/Carousel';

const advantages = [
  { id: 1, title: 'Tailor-Made Systems', icon: Cpu,        colorClass: 'text-blue-400',   boxClass: 'icon-box icon-box-blue',
    description: 'We build systems specifically for your business processes, ensuring they fit your day-to-day workflow perfectly.' },
  { id: 2, title: 'Quick & Reliable Setup',  icon: Zap,        colorClass: 'text-indigo-400', boxClass: 'icon-box icon-box-indigo',
    description: 'We deliver your finished website or software on time, in weeks rather than months, keeping you updated.' },
  { id: 3, title: 'Built to Grow With You',  icon: Globe,      colorClass: 'text-sky-400',    boxClass: 'icon-box icon-box-sky',
    description: 'Our websites and apps are built to handle as many visitors as your business gains without slowing down.' },
  { id: 4, title: 'Safe & Secure Data',      icon: ShieldCheck, colorClass: 'text-violet-400', boxClass: 'icon-box icon-box-violet',
    description: 'We use modern security and privacy standards to protect your business information and customer files.' },
];

const checkItems = [
  'Modern security standards',
  'Reliable automatic backups',
  '24/7 system monitoring',
  'Friendly and direct support',
];

const WhyChooseUs = () => {
  const [carouselWidth, setCarouselWidth] = useState(380);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCarouselWidth(290);
      } else if (window.innerWidth < 640) {
        setCarouselWidth(340);
      } else {
        setCarouselWidth(380);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const carouselItems = advantages.map((adv) => ({
    id: adv.id,
    title: adv.title,
    description: adv.description,
    icon: <adv.icon className="carousel-icon" />
  }));

  return (
    <section className="sec bg-section-alt relative overflow-hidden px-6">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Carousel */}
          <div className="order-2 lg:order-1 flex justify-center items-center py-4">
            <Carousel
              items={carouselItems}
              baseWidth={carouselWidth}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>

          {/* Right — text + checklist */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="section-label">The IrahNex Advantage</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.07 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white mb-5"
            >
              Why Partner <span className="text-gradient-blue">With Us?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.13 }}
              className="text-slate-400 text-base leading-relaxed mb-6 max-w-md"
            >
              We focus on clean designs, fast software, and helpful support. No complicated talk—just real results.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.18 }}
              className="space-y-2.5 mb-8"
            >
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.24 }}
            >
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Explore Our Vision <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
