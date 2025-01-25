import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from "../../LanguageContext";
import usaFlag from "../../assets/usa-flag.png";
import indonesiaFlag from "../../assets/indonesia-flag.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;
  
      const aboutPosition = aboutSection.getBoundingClientRect().top;
  
      if (aboutPosition <= window.innerHeight * 0.3) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
      <nav className={`container ${isDark ? 'dark-nav' : ''} ${location.pathname !== '/' ? 'dark-nav' : ''}`}>  
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li><Link to="/">{language === "en" ? "Home" : "Beranda"}</Link></li>
          <li><Link to="/programs">{language === "en" ? "Programs" : "Program"}</Link></li>
          <li><Link to="/teams_clients">{language === "en" ? "Teams & Clients" : "Tim dan Klien"}</Link></li>
          <li><Link to="/contact">{language === "en" ? "Contact Us" : "Kontak Kami"}</Link></li>
        </ul>
        <div className="language-switcher">
        <div className={`language-option ${language === "en" ? "active" : ""}`} onClick={() => toggleLanguage("en")}>
          <img src={usaFlag} alt="English" className="flag" />
          <span>EN</span>
        </div>
        <div className={`language-option ${language === "id" ? "active" : ""}`} onClick={() => toggleLanguage("id")}>
          <img src={indonesiaFlag} alt="Indonesian" className="flag" />
          <span>ID</span>
        </div>
      </div>
        <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      </nav>
  );
};

export default Navbar;
