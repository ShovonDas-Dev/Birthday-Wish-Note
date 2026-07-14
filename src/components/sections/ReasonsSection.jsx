import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const ReasonsSection = () => {
  const reasons = [
    'Your kindness touches everyone you meet',
    'Your laugh is the most contagious sound',
    'You have the biggest heart of anyone I know',
    'Your strength inspires me daily',
    'You make ordinary moments extraordinary',
    'Your beauty is beyond compare',
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
          Why You're So Special <span className="text-pink-400">✨</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-start gap-3 hover:border-rose-400/30 transition-all duration-300"
            >
              <span className="text-rose-400 text-xl mt-1">♥</span>
              <p className="text-white/80 text-sm font-light">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ReasonsSection;