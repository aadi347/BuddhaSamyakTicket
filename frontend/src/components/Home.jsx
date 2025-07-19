import React from 'react';

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Optional: Content on top */}
      <div className="relative z-20 text-white p-8">
        <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
