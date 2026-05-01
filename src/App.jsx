import React from 'react';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import SkillsCloud from './components/SkillsCloud';
import ProjectGallery from './components/ProjectGallery';
import ExperienceHackathons from './components/ExperienceHackathons';
import MultimediaShowcase from './components/MultimediaShowcase';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="bg-background text-white min-h-screen font-sans selection:bg-neonPrimary selection:text-black">
      
      {/* Navigation - Minimal fixed nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            NT<span className="text-neonPrimary">.</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-gray-400">
            <a href="#hero" className="hover:text-neonPrimary transition-colors">Home</a>
            <a href="#education" className="hover:text-neonSecondary transition-colors">Core</a>
            <a href="#projects" className="hover:text-neonAccent transition-colors">Lab</a>
            <a href="#contact" className="hover:text-white transition-colors">Comm</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <AboutEducation />
        <SkillsCloud />
        <ProjectGallery />
        <ExperienceHackathons />
        <MultimediaShowcase />
      </main>

      <ContactFooter />
    </div>
  );
}

export default App;
