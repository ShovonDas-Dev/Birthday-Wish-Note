import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ConfettiPiece = ({ color, x, y, rotate, duration, delay, isCircle }) => (
  <motion.div
    className="absolute"
    style={{
      left: x,
      top: y,
      width: isCircle ? 8 : 10,
      height: isCircle ? 8 : 14,
      borderRadius: isCircle ? '50%' : '2px',
      backgroundColor: color,
      rotate,
    }}
    animate={{
      y: ['100vh', '-10vh'],
      x: [0, Math.random() * 200 - 100],
      rotate: [rotate, rotate + 360 * (Math.random() > 0.5 ? 1 : -1)],
    }}
    transition={{ duration, delay, ease: 'linear', repeat: Infinity }}
  />
);

const ConfettiSystem = ({ active }) => {
  const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff9f43', '#00d2d3', '#ff4757', '#2ed573'];
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (!active) return;
    const newPieces = [];
    for (let i = 0; i < 150; i++) {
      newPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        rotate: Math.random() * 360,
        duration: Math.random() * 3 + 2.5,
        delay: Math.random() * 4,
        isCircle: Math.random() > 0.5,
      });
    }
    setPieces(newPieces);
  }, [active]);

  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((p) => (
        <ConfettiPiece key={p.id} {...p} />
      ))}
    </div>
  );
};

export default ConfettiSystem;