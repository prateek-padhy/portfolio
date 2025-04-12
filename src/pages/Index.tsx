
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    document.title = 'Frontend Developer Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ScrollReveal>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
