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

  const videos = [
    { id: 1, title: 'RAKSHAK Demo', type: 'Project Demo' },
    { id: 2, title: 'TalentForge Pitch', type: 'Presentation' },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Handwritten Letters Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="text-neonSecondary" />
              <h4 className="text-2xl font-display font-semibold text-white">Digital Journal</h4>
            </div>
            <p className="text-gray-400 mb-6 font-light">A collection of handwritten notes, thoughts, and reflections.</p>
            
            <a href="https://drive.google.com/file/d/1AnmfCJc1OL8bPfgCND90GV4E-u2XIe8u/view?usp=drivesdk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ff003c]/30 text-[#ff003c] hover:bg-[#ff003c] hover:text-white transition-all duration-300 font-mono text-sm mb-8 hover:shadow-[0_0_15px_rgba(255,0,60,0.4)]">
              <ExternalLink size={16} /> View Full Gallery on Drive
            </a>
            
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

          {/* Video Vault Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <PlayCircle className="text-neonPrimary" />
              <h4 className="text-2xl font-display font-semibold text-white">Video Vault</h4>
            </div>
            <p className="text-gray-400 mb-8 font-light">Project demonstrations and hackathon presentations.</p>
            
            <div className="flex flex-col gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-panel p-2 rounded-2xl group hover:border-[#00f0ff]/50 transition-colors duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-surface flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMTExIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiPjwvcmVjdD4KPC9zdmc+')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    
                    {/* Custom Player Skin overlay */}
                    <div className="w-16 h-16 rounded-full bg-black/50 border border-white/20 flex items-center justify-center z-20 group-hover:scale-110 group-hover:bg-[#00f0ff]/20 group-hover:border-[#00f0ff] transition-all duration-300">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white group-hover:border-l-[#00f0ff] border-b-[8px] border-b-transparent ml-1 transition-colors duration-300"></div>
                    </div>

                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-xs font-mono text-neonPrimary uppercase tracking-wider mb-1 block">{video.type}</span>
                      <h5 className="text-lg font-display font-medium text-white">{video.title}</h5>
                    </div>
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
