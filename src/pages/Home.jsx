import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhoWeAre from '../components/home/WhoWeAre';
import WhatWeDo from '../components/home/WhatWeDo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
