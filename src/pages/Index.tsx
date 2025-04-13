
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    document.title = 'John Doe | Frontend Developer';
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <ScrollReveal>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
