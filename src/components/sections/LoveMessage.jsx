import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const LoveMessage = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-transparent to-rose-50/5">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            💌
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">A Love Letter For You</h3>
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
            Every day with you feels like a dream I never want to wake up from.
            Your love has transformed my world, and I'm forever grateful for you.
            Happy Birthday, my love. You deserve all the happiness in the universe.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {['❤️', '✨', '🌟', '💫'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
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

export default LoveMessage;