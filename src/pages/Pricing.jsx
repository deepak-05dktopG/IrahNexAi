import React, { useEffect } from 'react';
import ServicePricing from '../components/services/ServicePricing';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white pt-20">
      <ServicePricing />
    </div>
  );
};

export default Pricing;
