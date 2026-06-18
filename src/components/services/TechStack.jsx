import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend & Cloud",
    techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"]
  },
  {
    title: "AI & Machine Learning",
    techs: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face"]
  }
];

const TechStack = () => {
  return (
    <section className="py-24 relative border-y border-white/5 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading tracking-tight">Our Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-[Inter]">
            We use the most modern, robust, and scalable technologies to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/10 pb-4 font-heading tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white cursor-default transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
