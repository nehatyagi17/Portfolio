import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, TrendingUp, Lock, ExternalLink } from 'lucide-react';

// ... (skipping to ProjectCard)

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'RAKSHAK',
    subtitle: 'AI-Powered Women Safety System',
    description: 'An advanced safety system featuring voice-trigger activation to instantly alert authorities and emergency contacts. Integrates real-time location tracking and audio streaming.',
    tags: ['React', 'Python', 'WebSockets', 'Geospatial'],
    icon: Shield,
    color: 'neonSecondary'
  },
  {
    id: 2,
    title: 'TalentForge',
    subtitle: 'RAG-Based Hiring Intelligence Platform',
    description: 'A smart recruitment platform that uses Retrieval-Augmented Generation (RAG) and Vector Databases to match candidates with job descriptions accurately, featuring an AI HR agent.',
    tags: ['Next.js', 'LangChain', 'Vector DB', 'FastAPI'],
    icon: Brain,
    color: 'neonPrimary'
  },
  {
    id: 3,
    title: 'Demand Pulse',
    subtitle: 'Sales Forecasting Engine',
    description: 'A highly accurate sales forecasting system leveraging PySpark for big data processing and XGBoost for predictive modeling, designed for retail supply chain optimization.',
    tags: ['PySpark', 'XGBoost', 'Python', 'Data Engineering'],
    icon: TrendingUp,
    color: 'neonAccent'
  },
  {
    id: 4,
    title: 'RationGuard',
    subtitle: 'Secure Distribution System',
    description: 'An offline-first, secure distribution system for public resources, utilizing hash-chained ledgers to prevent tampering and ensure transparency in supply chains.',
    tags: ['React', 'Node.js', 'Cryptography', 'Offline-First'],
    icon: Lock,
    color: 'neonPrimary'
  }
];

const ProjectCard = ({ project, index }) => {
  const glowColors = {
    neonPrimary: "group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] group-hover:border-[#00f0ff]/50 text-[#00f0ff]",
    neonSecondary: "group-hover:shadow-[0_0_30px_rgba(255,0,60,0.3)] group-hover:border-[#ff003c]/50 text-[#ff003c]",
    neonAccent: "group-hover:shadow-[0_0_30px_rgba(112,0,255,0.3)] group-hover:border-[#7000ff]/50 text-[#7000ff]",
  };

  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group glass-panel p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-4 ${glowColors[project.color].split(' text-')[0]}`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-current opacity-5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 ${glowColors[project.color].split(' ')[2]}`}></div>
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className={`p-4 rounded-xl bg-white/5 border border-white/10 ${glowColors[project.color].split(' ')[2]}`}>
          <Icon size={28} />
        </div>
        <div className="flex gap-3">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
        </div>
      </div>

      <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-colors">
        {project.title}
      </h3>
      <h4 className={`text-sm font-mono tracking-wider mb-4 ${glowColors[project.color].split(' ')[2]}`}>
        {project.subtitle}
      </h4>
      <p className="text-gray-400 mb-6 font-light leading-relaxed relative z-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-neonPrimary tracking-[0.3em] uppercase mb-2">The Lab</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonSecondary to-neonPrimary">Matrix</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
