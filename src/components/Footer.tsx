import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-serif">
              Prateek Padhy
            </a>
          </div>

          <div className="text-sm">© {currentYear} All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
