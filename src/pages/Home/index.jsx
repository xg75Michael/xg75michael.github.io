import React from 'react';
import Hero from '@/pages/Hero';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';

const Home = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Services></Services>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </React.Fragment>
  );
};

export default Home;
