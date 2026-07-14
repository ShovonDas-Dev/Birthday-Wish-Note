import React from 'react';
import { motion } from 'framer-motion';

const LetterContent = ({ onCelebrate }) => {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="absolute inset-4 bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center p-6"
    >
      <div className="text-center space-y-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-5xl"
        >
          ❤️
        </motion.div>
        <h2 className="text-lg md:text-xl font-serif text-gray-700">A Special Message For</h2>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          My Love!
        </h1>
        <p className="text-gray-500 text-sm font-light">Open this with all my heart...</p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(244, 63, 94, 0.3)',
              '0 0 60px rgba(244, 63, 94, 0.6)',
              '0 0 20px rgba(244, 63, 94, 0.3)',
            ],
          }}
          transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
          onClick={onCelebrate}
          className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-rose-500/50 transition-all duration-300 text-lg"
        >
          Click Me ❤️
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LetterContent;