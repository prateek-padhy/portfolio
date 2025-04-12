
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary text-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </a>
          </div>
          
          <div className="text-white/70 text-sm">
            © {currentYear} All Rights Reserved
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-white/70 hover:text-white transition-colors mx-2">
              Home
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors mx-2">
              About
            </a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors mx-2">
              Projects
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors mx-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
