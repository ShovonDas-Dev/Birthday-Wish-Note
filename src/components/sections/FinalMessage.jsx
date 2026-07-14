import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const FinalMessage = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-rose-50/5 to-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-7xl mb-4"
          >
            🌹
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Thank You For Being You</h3>
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
            You make my world brighter just by being in it.
            I hope this birthday brings you all the joy and love you deserve.
            Here's to many more beautiful years together.
          </p>
          <div className="mt-6 text-2xl flex justify-center gap-3">
            {['💕', '✨', '🌟', '💫', '❤️'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FinalMessage;