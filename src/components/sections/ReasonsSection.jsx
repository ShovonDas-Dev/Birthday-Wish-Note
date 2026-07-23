import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const ReasonsSection = () => {
  const reasons = [
    'You have so much patience, even when things get difficult. ❤️',
    'You love me deeply. Sometimes you get a little angry, but I know it’s because you care. ❤️',
    'You have such a cute and childish side, even if you don\'t always show it ❤️',
    'Your strength inspires me daily 💪',
    'You always believe in me, encourage me, and stand by my side.💪',
    'You make my life brighter with your smile, your care, and your presence. Life feels better because you\'re in it. ✨',
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
              <span className="text-rose-400 text-xl mt-1"></span>
              <p className="text-white/80 text-sm font-light">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ReasonsSection;