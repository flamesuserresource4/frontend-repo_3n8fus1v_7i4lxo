import React from 'react';

const ThemePage = () => {
  return (
    <section className="min-h-screen w-full bg-[#0a0612] text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(70%_60%_at_80%_100%,rgba(244,63,94,0.3),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-rose-300">
          BSDK KAL RUNNING PE AJANA SUBH 4 BHJE
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80">
          Theme page styled with a bold blend of purple and red hues. Crisp typography, soft glows, and smooth gradients create a vibrant futuristic vibe.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <h3 className="font-semibold text-white/90">Palette</h3>
            <div className="mt-4 flex gap-3">
              <div className="h-10 w-10 rounded-lg bg-purple-600" />
              <div className="h-10 w-10 rounded-lg bg-fuchsia-500" />
              <div className="h-10 w-10 rounded-lg bg-rose-500" />
              <div className="h-10 w-10 rounded-lg bg-purple-900" />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <h3 className="font-semibold text-white/90">Mood</h3>
            <p className="mt-2 text-white/75 text-sm">
              Futuristic, energetic, and expressive. Designed to pop on a dark background with neon accents.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-700/40 via-fuchsia-600/40 to-rose-600/40 p-8">
          <p className="text-white/90">
            You can refine the message, change the timing, or adjust colors on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThemePage;
