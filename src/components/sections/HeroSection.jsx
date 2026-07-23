import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center text-center py-20"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-8xl md:text-9xl mb-6"
      >
        🎂
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent"
      >
        Happy Birthday
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-white/90 mt-2"
      >
        Pinky ❤️
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto my-6 rounded-full"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-white text-base md:text-lg font-light max-w-md mx-auto"
      >
        Today, the world became a brighter place — because it celebrated the day you were born. 😁
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex justify-center gap-4 mt-8 text-3xl md:text-4xl"
      >
        {['🎈', '🎉', '🎊', '✨', '💖', '🌟'].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;