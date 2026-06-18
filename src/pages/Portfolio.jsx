import React, { useEffect, useState } from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import DomeGallery from '../components/ui/DomeGallery';
import ServiceCTA from '../components/services/ServiceCTA';

const images = [
  { 
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Aura AI Analytics',
    desc: 'Real-time data intelligence and predictive analytics platform powered by advanced neural networks.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Nexus E-Commerce',
    desc: 'Next-generation decentralized shopping experience with seamless blockchain payments and AI recommendation engine.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Cognitive Health AI',
    desc: 'Deep learning medical imaging diagnostics and patient health monitoring suite.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Synthetix Financial Hub',
    desc: 'Advanced algorithmic trading terminal and automated asset portfolio management.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Lumina Smart Grid',
    desc: 'IOT-driven energy distribution grid optimizer with intelligent load balancing.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Quantum Secure Chat',
    desc: 'End-to-end encrypted messaging application secured with quantum-resistant cryptography.'
  }
];

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div className="relative z-10 flex flex-col">
        <PortfolioHero />
        
        {/* Dome Gallery Container */}
        <div style={{ 
          width: '100%', 
          height: isMobile ? '420px' : '80vh', 
          position: 'relative', 
          overflow: 'hidden' 
        }}>
          <DomeGallery
            images={images}
            fit={isMobile ? 1.15 : 0.65}
            minRadius={isMobile ? 360 : 300}
            maxVerticalRotationDeg={14}
            segments={30}
            dragDampening={1.2}
            grayscale={false}
          />
        </div>
        
        <ServiceCTA />
      </div>
    </div>
  );
};

export default Portfolio;
