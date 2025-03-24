
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Projects', link: '#projects' },
    { name: 'About', link: '#about' },
    { name: 'Contact', link: '#contact' },
  ];

  const handleNavClick = (link: string) => {
    setMobileMenuOpen(false);
    document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add a body class when mobile menu is open to prevent scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 backdrop-blur-sm',
        isScrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-xl sm:text-2xl">
          <span>Prateek </span>
          <span className="shimmer-effect">Padhy</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.link);
              }}
              className="font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.name}
            </a>
          ))}
          <Button
            className="rounded-full px-4 bg-primary hover:bg-primary/90 button-transition"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md border-t border-border/50 flex flex-col md:hidden transition-transform duration-300 ease-in-out z-40',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.link);
              }}
              className="text-xl font-medium text-foreground transition-colors duration-200 hover:text-accent"
            >
              {item.name}
            </a>
          ))}
          <Button
            className="rounded-full mt-4 px-8 py-6 text-lg bg-primary hover:bg-primary/90 button-transition"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
