import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <SectionWrapper className="bg-gradient-to-b from-rose-50/5 to-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          A Little Surprise <span className="text-yellow-400">🎁</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
        >
          {!revealed ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setRevealed(true)}
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-rose-500/50 transition-all duration-300"
            >
              Click to Reveal 🎁
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="text-6xl">💝</div>
              <p className="text-white text-lg font-light leading-relaxed">
                You are the most incredible person I've ever known.
                Every day with you is a gift, and I'm so thankful for you.
                I love you more than words can say.
              </p>
              <div className="flex justify-center gap-3 text-3xl">
                {['❤️', '✨', '🌟', '💖'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SurpriseSection;