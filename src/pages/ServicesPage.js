import React from 'react';
import ServicesHero from '../components/sections/ServicesHero';
import ServicesList from '../components/sections/ServicesList';
import ServiceDetails from '../components/sections/ServiceDetails';
import CTA from '../components/sections/CTA';

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceDetails />
      <CTA />
    </>
  );
};

export default ServicesPage;
