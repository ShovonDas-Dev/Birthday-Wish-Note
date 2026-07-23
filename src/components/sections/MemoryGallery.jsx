import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const MemoryGallery = () => {
  const memories = [
    { emoji: '🌅', label: 'Sunset walks' },
    { emoji: '🌊', label: 'Beach Trip Together' },
    { emoji: '🏔️', label: 'Exploring Kashmir Together' },
    { emoji: '🌙', label: 'Late-Night Talks Under the Stars' },
    { emoji: '❤️', label: 'Growing Old Together' },
    { emoji: '🎭', label: 'Theater nights' },
  ];

  return (
    <SectionWrapper className="bg-gradient-to-b from-rose-50/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Our Future Together ✨ <span className="text-amber-400">📸</span>
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-rose-400/30 transition-all duration-300 group"
            >
              <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{memory.emoji}</div>
              <p className="text-white/70 text-sm font-light">{memory.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MemoryGallery;