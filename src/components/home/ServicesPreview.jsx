import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Smartphone, ArrowRight, Code2, Database } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: <Cpu size={24} />,
      title: 'AI Integration',
      description: 'Leverage cutting-edge AI to automate workflows and unlock new capabilities within your business operations.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Web App Development',
      description: 'Scalable, secure, and blazing-fast web applications built with modern frameworks and cloud infrastructure.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile experiences designed to engage users and provide seamless digital interactions.',
    },
    {
      icon: <Code2 size={24} />,
      title: 'Custom Software',
      description: 'Bespoke software tailored to your specific enterprise needs, ensuring long-term flexibility and growth.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm tracking-[0.2em] uppercase mb-4 text-secondary"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Our Core <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We provide end-to-end digital services to help ambitious companies thrive in the modern technological landscape.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <ArrowRight size={48} />
              </div>
              
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(123,45,255,0.1))',
                  border: '1px solid rgba(0,245,255,0.15)',
                }}
              >
                <span className="text-white group-hover:text-primary transition-colors">
                  {service.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="mt-8">
                <Link to="/services" className="text-sm font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
