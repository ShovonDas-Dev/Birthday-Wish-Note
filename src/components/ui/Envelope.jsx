import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LetterContent from './LetterContent';

const Envelope = ({ onCelebrate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowLetter(true), 800);
    }
  };

  return (
    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3] perspective-1000">
      <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-purple-900/50" />
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 border-4 border-amber-600 shadow-xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-full h-px bg-black" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-black" />
        </div>

        <AnimatePresence>
          {showLetter && <LetterContent onCelebrate={onCelebrate} />}
        </AnimatePresence>
      </div>

      {/* Envelope Flap */}
      <motion.div
        initial={false}
        animate={{
          rotateX: isOpen ? -180 : 0,
          top: isOpen ? '-5%' : '0%',
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        onClick={handleClick}
        className="absolute inset-0 rounded-2xl cursor-pointer"
        style={{
          transformOrigin: 'top',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="w-full h-full rounded-2xl bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 border-4 border-amber-600 shadow-lg"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 70%, 0 0)' }}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            {!isOpen && (
              <div className="text-center mb-50 ">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-5xl md:text-6xl mb-2">💌</div>
                  <p className="text-white font-bold text-sm md:text-base tracking-wider drop-shadow-lg">
                    TAP 
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div
        className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-amber-600"
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 30%, 0 0)', background: 'transparent' }}
      />
    </div>
  );
};

export default Envelope;