import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Folder from '../ui/Folder';

const projects = [
  { title: 'Online Store', category: 'Web & Payments',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['E-Commerce', 'Mobile Friendly'] },
  { title: 'Client Database', category: 'Business Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    tags: ['Auto-Invoices', 'Secure'] },
  { title: 'Sales Dashboard', category: 'Data & Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Visual Charts', 'Reports'] },
];

const PortfolioPreview = () => {
  const navigate = useNavigate();
  const [vw, setVw] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const folderSize = vw < 640 ? 1.8 : 2.5;

  return (
    <section className="sec relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-5">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <span className="section-label">Case Studies</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.07 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white font-heading"
            >
              Our Latest <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.14 }}
          >
            <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2 shrink-0">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Info Tip */}
        <p className="text-slate-500 text-xs text-center mb-6">
          Click the folder below to open and view the project files.
        </p>

        {/* Folder Container - Centered, zero extra vertical gaps */}
        <div className="relative w-full flex items-center justify-center py-20 overflow-visible h-[300px] sm:h-[360px]">
          <Folder
            size={folderSize}
            color="#2563EB"
            className="drop-shadow-[0_20px_50px_rgba(37,99,235,0.25)]"
            items={projects.map((p) => (
              <div
                key={p.title}
                className="w-full h-full flex flex-col justify-end p-2.5 cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%), url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px'
                }}
                onClick={() => navigate('/portfolio')}
              >
                <div className="text-left font-sans select-none pointer-events-none">
                  <p className="text-[7px] font-bold text-blue-400 uppercase tracking-wider mb-0.5">{p.category}</p>
                  <p className="text-white font-bold text-[9px] leading-tight font-heading truncate">{p.title}</p>
                </div>
              </div>
            ))}
          />
        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;
