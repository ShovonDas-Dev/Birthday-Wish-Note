import { useState, useRef, useEffect } from 'react';

export const useAudio = (shouldPlay) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      );
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (shouldPlay && !isMuted) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [shouldPlay, isMuted]);

  const toggleMute = () => setIsMuted(!isMuted);

  return { isMuted, toggleMute };
};