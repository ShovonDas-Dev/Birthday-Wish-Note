import React, { useState } from 'react';
import {
  ConfettiSystem,
  FireworksSystem,
  FloatingBalloons,
  FloatingHearts,
  ParticleBackground,
  HeroSection,
  BirthdayWishes,
  ReasonsSection,
  LoveMessage,
  MemoryGallery,
  Timeline,
  SurpriseSection,
  FinalMessage,
  CelebrateAgainButton,
  Envelope,
  MuteButton,
} from './components';
import { useAudio } from './hooks/useAudio';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [showScrollContent, setShowScrollContent] = useState(false);
  const { isMuted, toggleMute } = useAudio(showCelebration);

  const handleCelebrate = () => {
    setShowCelebration(true);
    setIsCelebrating(true);
    setTimeout(() => setShowScrollContent(true), 1000);
  };

  const handleCelebrateAgain = () => {
    setIsCelebrating(false);
    setTimeout(() => setIsCelebrating(true), 100);
    setTimeout(() => setIsCelebrating(false), 5000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-950 to-gray-900 relative overflow-hidden">
        {/* <ParticleBackground />  */}
        {/* Flying hearts */}
       {/* <FloatingHearts active={showCelebration || isCelebrating} /> */}
       {/* Flying balloons */}
      {/* <FloatingBalloons active={showCelebration || isCelebrating} /> */}
      {/* <ConfettiSystem active={showCelebration || isCelebrating} /> */}
      <FireworksSystem active={showCelebration || isCelebrating} /> 
      
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {!showScrollContent ? (
          <Envelope onOpen={() => {}} onCelebrate={handleCelebrate} />
        ) : (
          <div className="w-full max-w-6xl mx-auto">
            <HeroSection />
            <BirthdayWishes />
            <ReasonsSection />
            <LoveMessage />
            <MemoryGallery />
            <Timeline />
            <SurpriseSection />
            <FinalMessage />
            <CelebrateAgainButton onClick={handleCelebrateAgain} />
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-white/20 text-xs font-light tracking-wider z-20">
        ✦ Made with Love ✦
      </div>
    </div>
  );
}

export default App;

