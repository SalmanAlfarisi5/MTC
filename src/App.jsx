import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Clients from './Components/Clients/Clients';
import Teams from './Components/Teams/Teams';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import WhatsappWidget from './Components/WhatsappWidget/WhatsappWidget';
import ChatbotWidget from './Components/ChatbotWidget/ChatbotWidget';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our programs" title="What we offer" />
        <Programs />
        <About />
        <Title subTitle="Clients" title="Companies that Choose Us" />
        <Clients />
        <Title subTitle="" title="Our Teams" />
        <Teams />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <ChatbotWidget />
      <WhatsappWidget /> 
    </div>
  );
};

export default App;
