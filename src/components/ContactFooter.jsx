import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal, Send } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactFooter = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-8 border-t border-white/10 bg-black/80">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20 flex flex-col items-center text-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-neonPrimary tracking-[0.3em] uppercase mb-2">Establish Uplink</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-6">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPrimary to-neonAccent">Connect</span></h3>
            
            <p className="text-gray-400 mb-10 font-light leading-relaxed max-w-md mx-auto">
              Whether you're looking to build something extraordinary, need an AI/ML developer, or just want to chat about tech—my inbox is always open.
            </p>

            <div className="flex flex-col items-center gap-6 mb-10">
              <a href="mailto:nehatyagi1717@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neonPrimary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-neonPrimary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                  <Mail size={20} />
                </div>
                <span className="font-mono text-sm">nehatyagi1717@gmail.com</span>
              </a>
              <a href="tel:+918979168285" className="flex items-center gap-4 text-gray-300 hover:text-neonPrimary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-neonPrimary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                  <Terminal size={20} />
                </div>
                <span className="font-mono text-sm">+91-9999999999</span>
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a href="https://github.com/nehatyagi17" target="_blank" rel="noreferrer" className="p-4 glass-panel hover:-translate-y-2 hover:border-[#00f0ff]/50 hover:text-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com/in/neha-tyagi-17may2005" target="_blank" rel="noreferrer" className="p-4 glass-panel hover:-translate-y-2 hover:border-[#00f0ff]/50 hover:text-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </motion.div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 font-mono text-xs">
          <p>© {new Date().getFullYear()} Neha Tyagi. All systems online.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Status: Optimal</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
