
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Transition from '@/components/Transition';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <AnimatePresence mode="wait">
        <Transition>
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </Transition>
      </AnimatePresence>
    </div>
  );
};

export default Index;
