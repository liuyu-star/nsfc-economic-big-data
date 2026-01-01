import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          NSFC-EBD
        </div>
        
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('project-intro')}>项目介绍</button></li>
          <li><button onClick={() => scrollToSection('members')}>项目成员</button></li>
          <li><button onClick={() => scrollToSection('publications')}>论文成果</button></li>
          <li><button onClick={() => scrollToSection('grants')}>新增基金</button></li>
          <li><button onClick={() => scrollToSection('software')}>软件包</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
