import React from 'react';
import ServicesHero from '../components/sections/ServicesHero';
import ServicesList from '../components/sections/ServicesList';
import ServiceDetails from '../components/sections/ServiceDetails';
import ServiceBenefits from '../components/sections/ServiceBenefits';
import ServiceProcess from '../components/sections/ServiceProcess';
import ServiceFAQ from '../components/sections/ServiceFAQ';
import CTA from '../components/sections/CTA';

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceDetails />
      <ServiceBenefits />
      <ServiceProcess />
      <ServiceFAQ />
      <CTA />
    </>
  );
};

export default ServicesPage;
