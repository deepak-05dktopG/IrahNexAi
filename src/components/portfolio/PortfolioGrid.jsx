import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aura AI Analytics',
    category: 'AI Dashboard',
    description: 'A comprehensive predictive analytics dashboard utilizing real-time machine learning models to forecast market trends.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Python', 'TensorFlow'],
  },
  {
    id: 2,
    title: 'Nexus E-Commerce',
    category: 'Full-Stack Platform',
    description: 'A highly scalable e-commerce infrastructure with dynamic product previews and AI-driven recommendations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'Node.js', 'AWS'],
  },
  {
    id: 3,
    title: 'Cognitive Health AI',
    category: 'Predictive Analytics',
    description: 'A secure medical diagnostic platform that analyzes patient data streams to predict potential health anomalies.',
    image: 'https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=1200',
    tags: ['Vue', 'Django', 'PyTorch'],
  },
  {
    id: 4,
    title: 'Synthetix Financial Hub',
    category: 'Fintech App',
    description: 'A decentralized finance portfolio tracker with real-time smart contract integration and biometric security.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200',
    tags: ['Web3', 'React Native', 'Solidity'],
  },
  {
    id: 5,
    title: 'Lumina Smart Grid',
    category: 'IoT Interface',
    description: 'An intuitive control panel for smart city infrastructure, managing energy distribution across thousands of nodes.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['Svelte', 'Go', 'GraphQL'],
  },
  {
    id: 6,
    title: 'Quantum Secure Chat',
    category: 'Communication',
    description: 'An ultra-secure, end-to-end encrypted messaging protocol utilizing advanced cryptographic algorithms.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
    tags: ['Rust', 'React', 'WebSockets'],
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-10 pb-20 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-blue-600 text-white border border-blue-500'
                  : 'text-slate-400 border border-white/10 hover:border-blue-500/40 hover:text-slate-200 bg-transparent'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group surface-card overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-[#0E1420]/30 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-white font-bold text-base tracking-tight mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 bg-white/5 border border-white/8 rounded px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
