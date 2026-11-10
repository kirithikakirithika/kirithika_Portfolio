
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Sidebar from './components/Sidebar';
import Galaxy from './components/Galaxy';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Permanently enable dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');

    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'resume',
        'portfolio',
        'contact'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;

          const elementBottom =
            element.getBoundingClientRect().bottom + window.scrollY;

          if (
            scrollPosition >= elementTop &&
            scrollPosition < elementBottom
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative flex min-h-screen font-sans bg-black text-white">

      {/* GALAXY BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Galaxy
          density={1.2}
          glowIntensity={1.1}
          flareIntensity={0.8}
          starSize={1}
          opacity={1}
          starSpeed={0.5}
          mouseRepulsion
          clickWarp
          starColors={[]}
          hueShift={140}
          saturation={0}
          twinkleIntensity={0.3}
          speed={1}
          rotationSpeed={0.1}
          layers={4}
          direction="forward"
          repulsionStrength={2}
          mouseInteraction
          intro
          lightMode={false}
        />
      </div>

      {/* FIXED SIDEBAR */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home onNext={() => scrollToSection('about')} />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* SCROLL PROGRESS INDICATOR */}
      <div className="fixed right-10 bottom-10 z-50 hidden lg:flex flex-col gap-4">

        <motion.div
          className="w-1 h-24 relative overflow-hidden bg-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full bg-brand"
            style={{
              height: '100%',
              scaleY:
                activeSection === 'home' ? 0.2 :
                activeSection === 'about' ? 0.4 :
                activeSection === 'resume' ? 0.6 :
                activeSection === 'portfolio' ? 0.8 : 1
            }}
            transition={{
              type: 'spring',
              stiffness: 100
            }}
          />
        </motion.div>

        <span className="text-neutral-500 [writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-widest">
        </span>

      </div>

    </div>
  );
}

export default App;
