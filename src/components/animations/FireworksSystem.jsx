import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FireworkSparkle = ({ x, y, delay }) => {
  const colors = ['#ff6b6b', '#feca57', '#ff9ff3', '#54a0ff', '#ff4757', '#ff6348', '#a29bfe'];
  const particles = [];
  for (let i = 0; i < 25; i++) {
    const angle = (i / 25) * 360;
    const distance = 50 + Math.random() * 80;
    particles.push({
      id: i,
      x: Math.cos(angle * (Math.PI / 180)) * distance,
      y: Math.sin(angle * (Math.PI / 180)) * distance,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 3 + Math.random() * 5,
    });
  }

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, backgroundColor: p.color, boxShadow: `0 0 ${p.size * 2}px ${p.color}` }}
          animate={{
            x: [0, p.x],
            y: [0, p.y],
            opacity: [1, 0],
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      ))}
    </motion.div>
  );
};

const FireworksSystem = ({ active }) => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    if (!active) return;
    const createFirework = () => {
      const newFirework = {
        id: Date.now() + Math.random(),
        x: 5 + Math.random() * 90,
        y: 5 + Math.random() * 60,
        delay: Math.random() * 2,
      };
      setFireworks((prev) => [...prev, newFirework]);
      setTimeout(() => {
        setFireworks((prev) => prev.filter((f) => f.id !== newFirework.id));
      }, 3000);
    };

    createFirework();
    const interval = setInterval(createFirework, 600);
    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-45">
      {fireworks.map((f) => (
        <FireworkSparkle key={f.id} x={f.x + '%'} y={f.y + '%'} delay={f.delay} />
      ))}
    </div>
  );
};

export default FireworksSystem;