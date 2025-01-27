import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Title from '../../Components/Title/Title';
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const Landing = () => {
  return (
      <>
      <Hero/>
      <div id = "about">
        <About/>
      </div>
      <Title subTitle="Contact Us" title="Get in Touch" />
      <Contact/>
      </>
  );
};

export default Landing;

