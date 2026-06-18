import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, LineChart, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-16 h-16 text-primary" />,
    title: "Smart Software & AI",
    description: "We build custom software that learns from your data, answers customer questions, and helps predict business trends.",
    hueA: 180, // Cyan
    hueB: 150  // Emerald
  },
  {
    icon: <Code className="w-16 h-16 text-secondary" />,
    title: "Web & App Development",
    description: "Fast, reliable, and secure websites or mobile apps tailored specifically to your business requirements.",
    hueA: 140, // Green
    hueB: 110  // Lime
  },
  {
    icon: <Globe className="w-16 h-16 text-accent" />,
    title: "Interactive Design",
    description: "Stunning designs, animations, and layouts that capture customer attention and make your business stand out.",
    hueA: 260, // Purple
    hueB: 280  // Violet
  },
  {
    icon: <Cpu className="w-16 h-16 text-[#FF3366]" />,
    title: "Task Automation",
    description: "Connect your emails, databases, and invoices so they pass information and run automatically in the background.",
    hueA: 340, // Red
    hueB: 10   // Orange
  },
  {
    icon: <LineChart className="w-16 h-16 text-[#00E5FF]" />,
    title: "Business Dashboards",
    description: "Turn your messy spreadsheets and business numbers into clean, visual charts that help you make better decisions.",
    hueA: 190, // Blue
    hueB: 220  // Indigo
  },
  {
    icon: <Zap className="w-16 h-16 text-[#FFD700]" />,
    title: "Speed & SEO Updates",
    description: "Make your current website load faster, rank higher on search engines, and work perfectly on all mobile phones.",
    hueA: 40,  // Yellow
    hueB: 60   // Gold
  }
];

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 70%, 40%)`;

const Card = ({ service, index }) => {
  const background = `linear-gradient(306deg, ${hue(service.hueA)}, ${hue(service.hueB)})`;

  return (
    <motion.div
      className="relative flex items-center justify-center pt-5 -mb-[80px] md:-mb-[120px] overflow-hidden w-full max-w-[500px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* The Splash Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
        }}
      />

      {/* The Card */}
      <motion.div
        variants={cardVariants}
        className="relative z-10 w-[300px] h-[430px] flex flex-col items-center justify-center p-8 rounded-[20px] bg-[#f5f5f5] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)] origin-[10%_60%] text-black"
      >
        <div className="mb-6">
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold mb-4 font-heading tracking-light text-center" style={{ color: '#090d16' }}>
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm font-[Inter] leading-relaxed text-center">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ScrollTriggeredServices = () => {
  return (
    <section className="py-24 relative z-10 bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 min-h-screen">

          {/* Sticky Heading Container */}
          <div className="lg:w-1/3 relative z-20" data-aos="fade-right">
            <div className="sticky top-[70px] lg:top-40 pt-4 pb-6 self-start bg-[#05070F]/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-white/5 lg:border-none -mx-4 px-4 lg:mx-0 lg:px-0">
              <h2 className="text-4xl md:text-7xl font-bold mb-6 font-heading tracking-tight text-white leading-[0.9]">
                Core <br className="hidden lg:block" /> Services
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent mb-8" />
              <p className="text-gray-400 text-lg md:text-xl max-w-sm font-[Inter] opacity-70">
                Practical, high-quality digital services built to help your business operate and grow.
              </p>

              {/* Decorative Scroll Indicator */}
              <div className="mt-12 hidden lg:flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white/20">
                <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
                <span>Scroll to explore</span>
              </div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="lg:w-2/3 flex flex-col items-center pb-40 space-y-12 md:space-y-0">
            {services.map((service, index) => (
              <Card key={index} service={service} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScrollTriggeredServices;
