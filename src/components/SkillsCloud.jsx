import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name, delay, color = "neonPrimary" }) => {
  const glowColors = {
    neonPrimary: "shadow-[0_0_10px_#00f0ff] border-[#00f0ff]",
    neonSecondary: "shadow-[0_0_10px_#ff003c] border-[#ff003c]",
    neonAccent: "shadow-[0_0_10px_#7000ff] border-[#7000ff]",
  };

  const textColors = {
    neonPrimary: "text-[#00f0ff]",
    neonSecondary: "text-[#ff003c]",
    neonAccent: "text-[#7000ff]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      whileHover={{ y: -10, scale: 1.1, zIndex: 10 }}
      className={`px-6 py-3 rounded-full glass-panel border ${glowColors[color]} cursor-pointer backdrop-blur-xl animate-float-medium`}
      style={{ animationDelay: `${delay * 2}s` }}
    >
      <span className={`font-mono text-sm tracking-wide ${textColors[color]}`}>{name}</span>
    </motion.div>
  );
};

const SkillsCloud = () => {
  const languages = ['C', 'C++', 'Java', 'Python', 'JavaScript'];
  const frameworks = ['TensorFlow', 'PyTorch', 'scikit-learn', 'Django', 'React', 'Spring Boot'];
  const tools = ['Git', 'AWS SageMaker', 'Vector Databases'];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-neonAccent tracking-[0.3em] uppercase mb-2">Neural Network</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPrimary to-neonAccent">Arsenal</span></h3>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <div className="w-full max-w-4xl">
            <h4 className="text-gray-400 font-mono text-sm mb-6 text-center uppercase tracking-widest border-b border-white/10 pb-2">Languages</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={index * 0.1} color="neonPrimary" />
              ))}
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <h4 className="text-gray-400 font-mono text-sm mb-6 text-center uppercase tracking-widest border-b border-white/10 pb-2">Frameworks & Libraries</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {frameworks.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={0.2 + (index * 0.1)} color="neonSecondary" />
              ))}
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <h4 className="text-gray-400 font-mono text-sm mb-6 text-center uppercase tracking-widest border-b border-white/10 pb-2">Tools & Tech</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={0.4 + (index * 0.1)} color="neonAccent" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud;
