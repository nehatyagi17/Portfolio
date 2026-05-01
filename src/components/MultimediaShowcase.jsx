import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Image as ImageIcon, ExternalLink, X } from 'lucide-react';

const MultimediaShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder data for letters and videos
  const letters = [
    { id: 1, title: 'Letter 1', delay: 0.1, height: 'h-64', src: '/images/WhatsApp Image 2026-05-01 at 15.59.43.jpeg' },
    { id: 2, title: 'Letter 2', delay: 0.2, height: 'h-48' },
    { id: 3, title: 'Letter 3', delay: 0.3, height: 'h-80' },
    { id: 4, title: 'Letter 4', delay: 0.4, height: 'h-56' },
  ];

  return (
    <section className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-neonPrimary tracking-[0.3em] uppercase mb-2">Personal Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPrimary to-neonSecondary">Code</span></h3>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          
          {/* Handwritten Letters Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="text-neonSecondary" />
              <h4 className="text-2xl font-display font-semibold text-white">Digital Journal</h4>
            </div>
            <p className="text-gray-400 mb-6 font-light">A collection of handwritten notes, thoughts, and reflections.</p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 mb-8 border-t-4 border-t-[#ff003c]/50 hover:border-t-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.2)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff003c] opacity-5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
                <div>
                  <h5 className="text-xs font-mono text-[#ff003c] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <PlayCircle size={14} /> Featured Media
                  </h5>
                  <h4 className="text-xl font-display font-semibold text-white mb-1">Self Introduction Video</h4>
                  <p className="text-sm text-gray-400 font-light">Watch a brief overview of my background, skills, and academic journey.</p>
                </div>
                
                <a 
                  href="https://drive.google.com/file/d/1AnmfCJc1OL8bPfgCND90GV4E-u2XIe8u/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff003c]/10 border border-[#ff003c]/30 text-[#ff003c] hover:bg-[#ff003c] hover:text-white transition-all duration-300 font-mono text-sm hover:shadow-[0_0_15px_rgba(255,0,60,0.4)]"
                >
                  <ExternalLink size={16} /> Open Drive Link
                </a>
              </div>
            </motion.div>
            
            <div className="columns-2 gap-4 space-y-4">
              {letters.map((letter) => (
                <motion.div
                  key={letter.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: letter.delay }}
                  className={`w-full ${letter.height} glass-panel rounded-xl overflow-hidden relative group cursor-pointer`}
                  onClick={() => letter.src && setSelectedImage(letter.src)}
                >
                  {letter.src ? (
                    <img src={letter.src} alt={letter.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-surface to-[#222] flex items-center justify-center">
                      <span className="font-mono text-gray-600 opacity-50 group-hover:text-neonSecondary transition-colors duration-300">
                        IMG_00{letter.id}.PNG
                      </span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-mono text-sm text-white border border-white/30 px-4 py-2 rounded-full">View Note</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-neonSecondary/20 hover:text-neonSecondary text-white transition-colors border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(255,0,60,0.2)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MultimediaShowcase;
