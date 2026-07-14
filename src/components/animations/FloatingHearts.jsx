import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = ({ active }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (!active) return;
    const newHearts = [];
    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 10 + 8,
        size: Math.random() * 25 + 15,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setHearts(newHearts);
  }, [active]);

  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-rose-400/20"
          style={{ left: `${h.x}%`, bottom: '-30px', fontSize: h.size }}
          animate={{
            y: ['0vh', '-110vh'],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: h.duration, repeat: Infinity, delay: h.delay, ease: 'easeInOut' }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;