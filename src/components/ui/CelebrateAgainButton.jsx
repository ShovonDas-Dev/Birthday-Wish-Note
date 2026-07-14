import React from 'react';
import { motion } from 'framer-motion';

const CelebrateAgainButton = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center py-16"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 text-lg"
      >
        🎁 Celebrate Again
      </motion.button>
    </motion.div>
  );
};

export default CelebrateAgainButton;