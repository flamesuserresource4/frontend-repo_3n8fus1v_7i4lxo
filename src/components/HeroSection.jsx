import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0b0b14]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grainy gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(60%_50%_at_100%_100%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(60%_50%_at_0%_100%,rgba(236,72,153,0.18),transparent_60%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-white/90 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          Welcome
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/70">
          A bold, futuristic experience with interactive 3D. Use the button at the bottom to continue.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
