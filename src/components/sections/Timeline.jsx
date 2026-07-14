import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

const Timeline = () => {
  const events = [
    { year: 'First Meeting', description: 'The moment I knew you were special.', emoji: '💫' },
    { year: 'First Date', description: 'A night I\'ll never forget.', emoji: '🌙' },
    { year: 'Falling in Love', description: 'You captured my heart completely.', emoji: '❤️' },
    { year: 'Today', description: 'Celebrating you, my greatest gift.', emoji: '🎂' },
  ];

  return (
    <SectionWrapper className="bg-gradient-to-b from-transparent to-rose-50/5">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Our Timeline <span className="text-purple-400">⏳</span>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-rose-400 to-pink-400" />
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-1">{event.emoji}</div>
                  <h4 className="text-white font-bold text-sm">{event.year}</h4>
                  <p className="text-white/70 text-xs font-light">{event.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full border-2 border-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;