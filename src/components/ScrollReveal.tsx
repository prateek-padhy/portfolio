
import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add the active class when the element is in view
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('active');
          }
        });
      },
      {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    // Observe all elements with the reveal class
    if (scrollRef.current) {
      const revealElements = scrollRef.current.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }

    // Cleanup function to unobserve on component unmount
    return () => {
      if (scrollRef.current) {
        const revealElements = scrollRef.current.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default ScrollReveal;
