import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import AISolutions from '../components/sections/AISolutions';
import CTA from '../components/sections/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <AISolutions />
      <CTA />
    </>
  );
};

export default HomePage;
