import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, LineChart, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "AI & Machine Learning",
    description: "Custom AI models, natural language processing, and predictive analytics tailored to your business needs."
  },
  {
    icon: <Code className="w-8 h-8 text-secondary" />,
    title: "Full-Stack Development",
    description: "High-performance, scalable web applications built with modern frameworks like React, Node.js, and Next.js."
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Immersive 3D Web",
    description: "Breathtaking WebGL and Three.js experiences that captivate users and elevate your brand presence."
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#FF3366]" />,
    title: "Automation & Integration",
    description: "Streamline workflows by connecting disparate systems and automating repetitive operational tasks."
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#00E5FF]" />,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights through advanced visualization and analytics dashboards."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#FFD700]" />,
    title: "Performance Optimization",
    description: "Audit and enhance existing applications for blazing-fast load times, SEO, and flawless accessibility."
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading tracking-tight">Core Capabilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-[Inter]">
            Comprehensive digital services designed to accelerate your growth and dominate your industry.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 relative group overflow-hidden border border-white/10 bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block border border-white/10 group-hover:border-primary/50 transition-colors duration-300 relative z-10">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-3 font-heading tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300 relative z-10">
              {service.title}
            </h3>
            
            <p className="text-gray-400 font-[Inter] leading-relaxed relative z-10">
              {service.description}
            </p>

            {/* Glowing border effect on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
