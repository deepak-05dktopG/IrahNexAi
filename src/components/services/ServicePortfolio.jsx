import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Folder from '../ui/Folder';

const ServicePortfolio = () => {
  const navigate = useNavigate();
  const [vw, setVw] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const folderSize = vw < 640 ? 1.8 : 2.5;

  const projects = [
    {
      title: "Online Store",
      category: "Web & Payments",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Client Database",
      category: "Business Automation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sales Dashboard",
      category: "Data & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-transparent">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[20%] w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
          <div className="max-w-3xl">
            <div data-aos="fade-right" className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-black">
                Case Studies
              </span>
            </div>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-heading"
            >
              Recent <span className="text-gradient">Projects</span>
            </h2>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200">
            <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
              View All Projects
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Info Tip */}
        <p className="text-slate-500 text-xs text-center mb-6">
          Click the folder below to open and view the project files.
        </p>

        {/* Folder Container - Centered, zero extra vertical gaps */}
        <div className="relative w-full flex items-center justify-center py-20 overflow-visible h-[300px] sm:h-[360px]">
          <Folder
            size={folderSize}
            color="#00F5FF"
            className="drop-shadow-[0_20px_50px_rgba(0,245,255,0.25)]"
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

export default ServicePortfolio;
