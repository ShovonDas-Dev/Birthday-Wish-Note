import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingBalloons = ({ active }) => {
  const [balloons, setBalloons] = useState([]);
  const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff4757', '#2ed573', '#ff6348'];

  useEffect(() => {
    if (!active) return;
    const newBalloons = [];
    for (let i = 0; i < 15; i++) {
      newBalloons.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 6,
        size: 30 + Math.random() * 25,
        color: colors[Math.floor(Math.random() * colors.length)],
        float: Math.random() * 50 - 25,
      });
    }
    setBalloons(newBalloons);
  }, [active]);

  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-35">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.x}%`, bottom: '-50px', fontSize: b.size }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, b.float, -b.float * 0.5, b.float * 0.7, 0],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
        >
          <div
            className="relative"
            style={{
              width: b.size * 0.7,
              height: b.size * 0.9,
              borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
              backgroundColor: b.color,
              boxShadow: `inset -5px -5px 15px rgba(0,0,0,0.1), inset 5px 5px 15px rgba(255,255,255,0.2)`,
            }}
          >
            <div
              className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2"
              style={{
                width: '2px',
                height: '20px',
                backgroundColor: 'rgba(255,255,255,0.3)',
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;