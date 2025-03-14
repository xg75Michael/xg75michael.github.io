import React from 'react';
import Hero from '@/pages/Hero';
import Services from '@/pages/Services';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';

const Home = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Services></Services>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </React.Fragment>
  );
};

export default Home;
