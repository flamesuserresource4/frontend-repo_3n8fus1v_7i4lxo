import React from 'react';

const Navbar = ({ onBack, showBack }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="text-white/90 font-bold tracking-tight">VibeSite</div>
        {showBack && (
          <button
            onClick={onBack}
            className="rounded-full border border-white/15 bg-white/10 text-white px-4 py-1.5 text-sm hover:bg-white/20 transition"
          >
            Back
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
