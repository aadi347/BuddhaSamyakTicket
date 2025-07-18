import React from 'react';

const Home = () => {
  return (
    <div>
      <video autoPlay muted loop playsInline width="100%" height="auto">
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
