import React, { useRef, useState } from "react";
import { FaInfoCircle, FaPause, FaPlay } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MessageBox from "./MessageBox"; // adjust path

const Home = () => {
   const [showMessage, setShowMessage] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const showInfo = () => {
    alert("This is a background video of the Buddha Samyak Darshan Museum.");
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen max-h-[40rem] overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
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
        <div className="absolute top-0 left-0 w-full h-full  z-10" />
        {/* Left Info Panel */}
        <div className="absolute bottom-6 left-4 z-20 w-[380px] bg-white text-black px-6 py-8 transition duration-300 group hover:bg-black hover:text-white ">
          <h2
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-xl font-bold"
          >
            Welcome to The Buddha Samyak Darshan Museum
          </h2>
          <p
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-sm leading-relaxed mt-4"
          >
            Discover the serene legacy of the Buddha through immersive exhibits
            and digital storytelling.
          </p>
          <Link to="/about-museum">
            <button
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="mt-5 text-sm px-5 py-2 border border-black bg-black text-white transition group-hover:bg-white group-hover:text-black"
            >
              Explore More
            </button>
          </Link>
        </div>

        {/* Pause/Play Button */}
        {/* Button Container at Bottom Right */}
        <div className="absolute bottom-5 right-5 z-30 flex  items-end gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={toggleVideo}
            className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Info Button */}
          <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}
    >
      {/* Info Button */}
      <button
        className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        title="Info"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Animate Message Box */}
      <AnimatePresence>{showMessage && <MessageBox />}</AnimatePresence>
    </div>

          <button
            onClick={showInfo}
            className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
            title="Info"
          >
            <FaRoute size={22} />
          </button>
        </div>
      </div>
         

    </>
  );
};

export default Home;
