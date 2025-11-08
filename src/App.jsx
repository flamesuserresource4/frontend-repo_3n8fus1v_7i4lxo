import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import BottomCTA from './components/BottomCTA';
import ThemePage from './components/ThemePage';
import Navbar from './components/Navbar';

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar onBack={() => setStep(0)} showBack={step === 1} />
      {step === 0 ? (
        <>
          <HeroSection />
          <BottomCTA onNext={() => setStep(1)} />
        </>
      ) : (
        <ThemePage />
      )}
    </div>
  );
}

export default App;
