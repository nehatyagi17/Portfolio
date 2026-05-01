import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const TimelineItem = ({ year, title, subtitle, details, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="relative pl-8 md:pl-0"
  >
    <div className="md:flex items-center justify-between md:mb-8 w-full">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-surface border-2 border-neonPrimary shadow-[0_0_15px_#00f0ff] transform md:-translate-x-1/2 flex items-center justify-center z-10 mt-1 md:mt-0">
        <Icon size={14} className="text-neonPrimary" />
      </div>

      <div className="md:w-5/12 mb-8 md:mb-0">
        <div className="md:text-right hidden md:block">
          <span className="text-neonPrimary font-mono tracking-wider">{year}</span>
        </div>
      </div>

      <div className="md:w-5/12 glass-panel p-6 hover:-translate-y-2 transition-transform duration-300">
        <div className="md:hidden mb-2">
          <span className="text-neonPrimary font-mono tracking-wider">{year}</span>
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-1">{title}</h3>
        <h4 className="text-md text-gray-400 mb-3">{subtitle}</h4>
        <p className="text-gray-300 font-light">{details}</p>
      </div>
    </div>
  </motion.div>
);

const AboutEducation = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-neonSecondary tracking-[0.3em] uppercase mb-2">The Core</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPrimary to-neonSecondary">Trajectory</span></h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neonPrimary via-neonSecondary to-transparent transform md:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12 md:space-y-0">
            <TimelineItem 
              year="Present" 
              title="B.Tech Computer Science (AIML)" 
              subtitle="Graphic Era Hill University" 
              details="Current CGPA: 8.1. Focusing on Artificial Intelligence, Machine Learning, and advanced software development principles."
              icon={GraduationCap}
              delay={0.1}
            />
            
            <TimelineItem 
              year="Class XII" 
              title="Senior Secondary Education" 
              subtitle="Science Stream" 
              details="Achieved 90% aggregate. Built a strong foundation in Mathematics and Physics."
              icon={School}
              delay={0.3}
            />
            
            <TimelineItem 
              year="Class X" 
              title="Secondary Education" 
              subtitle="General Studies" 
              details="Achieved 93% aggregate. Developed early interest in analytical problem solving."
              icon={BookOpen}
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
