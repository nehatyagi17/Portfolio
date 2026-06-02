import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, UploadCloud, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const AdminUploadModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect security key. Access denied.');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file) => {
    if (file.type !== 'application/pdf') {
      setUploadStatus('error');
      setErrorMessage('Only PDF documents are allowed.');
      return;
    }

    setFileName(file.name);
    setUploadStatus('uploading');

    try {
      const response = await fetch('/api/upload-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/pdf',
        },
        body: file,
      });

      if (response.ok) {
        setUploadStatus('success');
        // Reset file name and state after 3 seconds, and close
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        const err = await response.json();
        setUploadStatus('error');
        setErrorMessage(err.error || 'Server error. Failed to save resume.');
      }
    } catch (err) {
      setUploadStatus('error');
      setErrorMessage('Connection failed. Is the server running?');
    }
  };

  const handleClose = () => {
    setPassword('');
    setIsAuthenticated(false);
    setAuthError('');
    setUploadStatus('idle');
    setErrorMessage('');
    setFileName('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md glass-panel p-8 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.1)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {!isAuthenticated ? (
              /* Security Access Screen */
              <div className="text-center py-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neonPrimary mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Lock size={20} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-wider">
                  Admin Authorization
                </h3>
                <p className="text-gray-400 text-sm font-light mb-8">
                  Enter local key to establish file system access.
                </p>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <input
                      type="password"
                      placeholder="Security Code"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-center placeholder-gray-600 focus:outline-none focus:border-neonPrimary transition-all duration-300"
                      autoFocus
                    />
                    {authError && (
                      <p className="text-[#ff003c] text-xs font-mono mt-2">{authError}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-neonPrimary/10 border border-neonPrimary text-neonPrimary hover:bg-neonPrimary hover:text-background transition-all duration-300 font-mono text-sm uppercase tracking-wider font-bold"
                  >
                    Authenticate
                  </button>
                </form>
              </div>
            ) : (
              /* Drag and Drop Upload Screen */
              <div className="text-center py-4">
                <h3 className="text-xl font-display font-bold text-white mb-1 uppercase tracking-wider">
                  Uplink Established
                </h3>
                <p className="text-gray-400 text-xs font-mono text-neonPrimary mb-6">
                  Ready to deploy new NehaTyagi.pdf
                </p>

                {uploadStatus === 'idle' && (
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                      dragActive
                        ? 'border-neonPrimary bg-neonPrimary/5 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                        : 'border-white/10 hover:border-white/20 bg-white/5'
                    }`}
                    onClick={() => document.getElementById('file-upload-input').click()}
                  >
                    <input
                      id="file-upload-input"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <UploadCloud size={40} className="text-gray-400 mb-4 animate-pulse" />
                    <p className="text-sm font-semibold text-white mb-1">
                      Drag & Drop Resume PDF
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      or click to browse local files
                    </p>
                  </div>
                )}

                {uploadStatus === 'uploading' && (
                  <div className="py-8 flex flex-col items-center justify-center">
                    <Loader className="text-neonPrimary animate-spin mb-4" size={36} />
                    <p className="text-sm text-white font-mono">Streaming file to disk...</p>
                    <p className="text-xs text-gray-500 font-light mt-1">{fileName}</p>
                  </div>
                )}

                {uploadStatus === 'success' && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-6 flex flex-col items-center justify-center text-center"
                  >
                    <CheckCircle className="text-green-500 mb-4" size={40} />
                    <p className="text-lg font-semibold text-white mb-1">Upload Complete</p>
                    <p className="text-xs text-gray-400 font-light max-w-[250px] mx-auto">
                      public/NehaTyagi.pdf has been updated. Dev server is reloading.
                    </p>
                  </motion.div>
                )}

                {uploadStatus === 'error' && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-6 flex flex-col items-center justify-center text-center"
                  >
                    <AlertCircle className="text-[#ff003c] mb-4" size={40} />
                    <p className="text-lg font-semibold text-white mb-1">Upload Failed</p>
                    <p className="text-xs text-[#ff003c]/80 font-mono mb-6 max-w-[280px] mx-auto">
                      {errorMessage}
                    </p>
                    <button
                      onClick={() => setUploadStatus('idle')}
                      className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono text-xs transition-all"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdminUploadModal;
