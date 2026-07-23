import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const BirthdayWishes = () => {
  const wishes = [
    { emoji: '💖', text: 'You light up my world every single day.' },
    { emoji: '✨', text: 'You are my peace, my smile, and my happiness.' },
    { emoji: '🌹', text: 'You are the most beautiful soul I know.' },
    { emoji: '🌟', text: 'I want to see your dreams come true, and I\'ll always be there to help you achieve them.' },
  ];

  return (
    <SectionWrapper className="bg-gradient-to-b from-transparent to-rose-50/5">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Birthday Wishes <span className="text-rose-400">❤️</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-rose-400/30 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{wish.emoji}</div>
              <p className="text-white/80 text-lg font-light">{wish.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BirthdayWishes;