import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, FileText, Edit3, Users, Briefcase } from 'lucide-react';

const learnings = [
  {
    id: 1,
    title: 'Self Introduction',
    outcome: 'Learned to present a structured and professional self-introduction, focusing on clearly communicating academic background, skills, and career objectives.',
    keyLearnings: 'Organizing content in a logical sequence (present, past, future), maintaining clarity and confidence, and highlighting relevant strengths.',
    application: 'Practiced delivering a concise introduction suitable for professional and academic environments.',
    icon: BookOpen,
    color: 'neonPrimary'
  },
  {
    id: 2,
    title: 'Extempore',
    outcome: 'Developed the ability to speak on a given topic without prior preparation while maintaining clarity and coherence.',
    keyLearnings: 'Structuring thoughts quickly, maintaining fluency, and supporting ideas with relevant examples.',
    application: 'Improved spontaneous speaking skills by organizing and presenting ideas logically under time constraints.',
    icon: Mic,
    color: 'neonSecondary'
  },
  {
    id: 3,
    title: 'Resume Writing',
    outcome: 'Learned how to prepare a professional resume that effectively represents academic qualifications, technical skills, and project experience.',
    keyLearnings: 'Writing concise bullet points, highlighting achievements, and maintaining an ATS-friendly structure.',
    application: 'Refined my resume by improving structure and presenting projects and skills more effectively.',
    icon: FileText,
    color: 'neonAccent'
  },
  {
    id: 4,
    title: 'Essay Writing',
    outcome: 'Enhanced formal writing skills by learning to structure essays in a clear and organized manner.',
    keyLearnings: 'Maintaining logical flow, structuring content into introduction, body, and conclusion, and using formal language.',
    application: 'Worked on essays such as "AI in Healthcare" with improved clarity and coherence.',
    icon: Edit3,
    color: 'neonPrimary'
  },
  {
    id: 5,
    title: 'Group Discussion',
    outcome: 'Learned effective communication techniques for participating in group discussions.',
    keyLearnings: 'Presenting ideas clearly, listening actively, and supporting arguments with logical reasoning.',
    application: 'Improved ability to contribute meaningfully while maintaining a balanced and respectful discussion approach.',
    icon: Users,
    color: 'neonSecondary'
  },
  {
    id: 6,
    title: 'Interview Skills',
    outcome: 'Learned essential skills required to perform effectively in interviews.',
    keyLearnings: 'Understanding common interview questions, structuring responses, and maintaining confidence and professional etiquette.',
    application: 'Practiced answering both technical and HR-based questions, improving clarity and overall presentation.',
    icon: Briefcase,
    color: 'neonAccent'
  }
];

const LearningCard = ({ learning, index }) => {
  const glowColors = {
    neonPrimary: "group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] group-hover:border-[#00f0ff]/40 text-[#00f0ff]",
    neonSecondary: "group-hover:shadow-[0_0_30px_rgba(255,0,60,0.2)] group-hover:border-[#ff003c]/40 text-[#ff003c]",
    neonAccent: "group-hover:shadow-[0_0_30px_rgba(112,0,255,0.2)] group-hover:border-[#7000ff]/40 text-[#7000ff]",
  };

  const Icon = learning.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${glowColors[learning.color].split(' text-')[0]}`}
    >
      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-current opacity-5 rounded-full transition-transform duration-500 group-hover:scale-150 ${glowColors[learning.color].split(' ')[2]}`}></div>
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${glowColors[learning.color].split(' ')[2]}`}>
          <Icon size={24} />
        </div>
        <div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Week {learning.id}</span>
          <h3 className="text-xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
            {learning.title}
          </h3>
        </div>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <div>
          <h4 className={`text-xs font-mono uppercase tracking-wider mb-1 ${glowColors[learning.color].split(' ')[2]}`}>Outcome</h4>
          <p className="text-gray-300 font-light text-sm leading-relaxed">{learning.outcome}</p>
        </div>
        
        <div>
          <h4 className={`text-xs font-mono uppercase tracking-wider mb-1 ${glowColors[learning.color].split(' ')[2]}`}>Key Learnings</h4>
          <p className="text-gray-400 font-light text-sm leading-relaxed">{learning.keyLearnings}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
        <h4 className={`text-xs font-mono uppercase tracking-wider mb-1 ${glowColors[learning.color].split(' ')[2]}`}>Application</h4>
        <p className="text-gray-400 font-light text-sm leading-relaxed italic">"{learning.application}"</p>
      </div>
    </motion.div>
  );
};

const WeeklyLearning = () => {
  return (
    <section id="weekly-learning" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-neonAccent tracking-[0.3em] uppercase mb-2">Continuous Growth</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonSecondary to-neonAccent">Learning</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Reflecting my continuous improvement in communication and professional skills through structured weekly learning activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnings.map((learning, index) => (
            <LearningCard key={learning.id} learning={learning} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyLearning;
