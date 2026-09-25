import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0b0e] border-t border-gray-800/60 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-[#ccff00]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z" />
          </svg>
          <span className="text-white font-extrabold text-sm tracking-wider uppercase">
            FITLOG
          </span>
        </div>

        {/* Copyright & Tagline */}
        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
