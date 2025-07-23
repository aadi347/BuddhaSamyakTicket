// src/components/ParallaxLayout.jsx
import React from "react";

const ParallaxLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* Fixed global background image */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-10] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw' }}
      ></div>

      {/* Scrollable foreground content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default ParallaxLayout;
