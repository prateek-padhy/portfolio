
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="section-divider"></div>
        
        <div className="mt-10 mb-12">
          <div className="section-number">03</div>
          <h2 className="section-title">Contact</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-lg mb-6">
              Feel free to reach out to me via email or connect with me on social media.
            </p>
            
            <a href="mailto:hello@johndoe.com" className="text-xl hover:underline font-medium">
              hello@johndoe.com
            </a>
          </div>
          
          <div>
            <div className="flex space-x-8">
              <a href="#" className="text-lg hover:underline">Github</a>
              <a href="#" className="text-lg hover:underline">LinkedIn</a>
              <a href="#" className="text-lg hover:underline">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-serif">
              John Doe
            </a>
          </div>
          
          <div className="text-sm">
            © {currentYear} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
