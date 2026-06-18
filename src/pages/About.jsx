import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutValues from '../components/about/AboutValues';
import AboutTeam from '../components/about/AboutTeam';
import ServiceCTA from '../components/services/ServiceCTA';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div className="relative z-10 flex flex-col">
        <AboutHero />
        <AboutValues />
        <AboutTeam />
        <div className="py-12" />
        <ServiceCTA />
      </div>
    </div>
  );
};

export default About;
