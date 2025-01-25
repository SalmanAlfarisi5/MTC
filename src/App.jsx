import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import WhatsappWidget from './Components/WhatsappWidget/WhatsappWidget';
import ChatbotWidget from './Components/ChatbotWidget/ChatbotWidget';
import Teams_Clients from './Components/Teams_Clients/Teams_Clients';

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainContent />
      <ChatbotWidget />
      <WhatsappWidget />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/programs"
          element={
            <>
              <Title subTitle="Our programs" title="What we offer" />
              <Programs />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/teams_clients"
          element={
            <>
              <Teams_Clients />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Title subTitle="Contact Us" title="Get in Touch" />
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
