import React from 'react';

const BottomCTA = ({ onNext }) => {
  return (
    <div className="sticky bottom-0 w-full bg-gradient-to-r from-purple-700/70 via-fuchsia-600/70 to-rose-600/70 backdrop-blur supports-[backdrop-filter]:bg-opacity-60 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <p className="text-white/80 text-sm sm:text-base">
          Ready for the theme page?
        </p>
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-2 text-sm font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition transform hover:scale-[1.02]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BottomCTA;
