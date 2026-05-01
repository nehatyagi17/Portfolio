import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "Hack-O-Holic 2026",
    position: "2nd Runner Up",
    description: "Developed an AI-driven solution under a 24-hour time constraint, impressing judges with the integration of complex ML models and seamless UI.",
    icon: Trophy,
    color: "neonSecondary"
  },
  {
    id: 2,
    title: "Hack the Winter",
    position: "Top 10 Finish",
    description: "Built a robust backend architecture for a real-time data streaming application, handling high concurrent connections efficiently.",
    icon: Award,
    color: "neonPrimary"
  },
  {
    id: 3,
    title: "Certifications",
    position: "Google, AWS, Deloitte",
    description: "Recognized certifications in Cloud Computing, AI methodologies, and enterprise-grade software development practices.",
    icon: Medal,
    color: "neonAccent"
  }
];

const ExperienceHackathons = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-neonSecondary tracking-[0.3em] uppercase mb-2">The Trophy Room</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonSecondary to-neonAccent">Glory</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            const glowClass = 
              item.color === 'neonPrimary' ? 'border-[#00f0ff]/30 hover:border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]' :
              item.color === 'neonSecondary' ? 'border-[#ff003c]/30 hover:border-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.4)]' :
              'border-[#7000ff]/30 hover:border-[#7000ff] hover:shadow-[0_0_20px_rgba(112,0,255,0.4)]';
              
            const textClass = 
              item.color === 'neonPrimary' ? 'text-[#00f0ff]' :
              item.color === 'neonSecondary' ? 'text-[#ff003c]' :
              'text-[#7000ff]';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`glass-panel p-8 text-center transition-all duration-300 border-t-4 ${glowClass} relative overflow-hidden group`}
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 ${item.color === 'neonPrimary' ? 'bg-[#00f0ff]' : item.color === 'neonSecondary' ? 'bg-[#ff003c]' : 'bg-[#7000ff]'} shadow-[0_0_10px_currentColor] group-hover:w-full transition-all duration-500`}></div>
                
                <div className="flex justify-center mb-6 relative">
                  <div className={`p-4 rounded-full bg-white/5 border border-white/10 ${textClass}`}>
                    <Icon size={40} className="animate-float-slow" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                <h4 className={`text-lg font-mono mb-4 ${textClass}`}>{item.position}</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHackathons;
