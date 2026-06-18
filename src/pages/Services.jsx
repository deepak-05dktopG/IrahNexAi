import React, { useEffect } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ScrollTriggeredServices from '../components/services/ScrollTriggeredServices';
import Workflow from '../components/services/Workflow';
import ServicePortfolio from '../components/services/ServicePortfolio';
import FAQ from '../components/services/FAQ';
import ServiceCTA from '../components/services/ServiceCTA';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div className="relative z-10">
        <ServiceHero />
        <ScrollTriggeredServices />
        <Workflow />
        <ServicePortfolio />
        <FAQ />
        <ServiceCTA />
      </div>
    </div>
  );
};

export default Services;
