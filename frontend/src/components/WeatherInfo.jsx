import React from "react";
import {
  WiDaySunny,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Rainbow } from "lucide-react";

const WeatherInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 pb-10 border-b border-gray-700">
      {/* Weather Data Section: NOW ON LEFT */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-auto text-white p-4 md:p-6 rounded-3xl shadow-xl space-y-4"
      >
        <div className="weather flex min-h-[8em] md:min-h-[15em] min-w-full md:min-w-[20em] flex-col items-center justify-center gap-[0.5em] rounded-[1.5em] bg-black px-[0.75em] md:px-[1em] py-[0.5em] font-nunito text-white border border-gray-500/30">
          <div className="flex h-fit w-full items-center justify-center gap-[0.75em] md:gap-[1em]">
            <Rainbow size={50} className="md:w-[70px] md:h-[70px]" />

            <span className="h-[3em] md:h-[4em] w-[1px] rounded-full bg-gray-500"></span>
            <div className="flex flex-col items-start justify-center">
              <p className="text-[0.65rem] md:text-[0.75rem] font-light">
                Seasoning City, Dishland
              </p>
              <p className="text-[1.25em] md:text-[1.5em] font-semibold">
                28°C
              </p>
              <div className="flex items-center justify-center gap-[0.125em]">
                <svg
                  viewBox="0 0 16 17"
                  fill="none"
                  height="17"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 14.26A5.92 5.92 0 1 0 8 2.42a5.92 5.92 0 0 0 0 11.84Z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#F471A6"
                  ></path>
                  <path
                    d="M8.595 5.716A.589.589 0 0 1 8 6.292a.576.576 0 1 1 .595-.576Zm-1.05 5.363V7.636a.448.448 0 0 1 .629-.425.441.441 0 0 1 .268.425v3.443a.449.449 0 0 1-.896 0Z"
                    fill="#F471A6"
                  ></path>
                </svg>
                <p className="text-[0.625rem] font-light">
                  Don’t miss out the Rainbow
                </p>
              </div>
            </div>
          </div>
          <div className="h-[0.5px] w-full rounded-full bg-gray-500"></div>
          <div className="flex h-fit w-full items-center justify-between">
            <div className="flex h-fit w-full flex-col items-start justify-between text-[0.75em]">
              <div className="flex flex-row items-center justify-center gap-[0.5em] p-[0.25em]">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.51 4.667A2 2 0 1 1 12 8H2m3.673-4.889a1.333 1.333 0 1 1 .994 2.222H2m5.673 7.556a1.333 1.333 0 1 0 .994-2.222H2"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#999"
                  ></path>
                </svg>
                <span className="h-[0.5em] w-[1px] rounded-full bg-gray-500"></span>
                <p>Wind Speed</p>
                <span className="h-[0.5em] w-[1px] rounded-full bg-gray-500"></span>
                <p>11km/hr</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0.5em] p-[0.25em]">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M12.606 7.393c.638.343 1.34.55 2.06.607v1.333a6.247 6.247 0 0 1-2.553-.666h-.053A5.227 5.227 0 0 0 10 8a4.1 4.1 0 0 0-1.867.593h-.04A5.693 5.693 0 0 1 6 9.333V8a5.06 5.06 0 0 0 1.533-.573h.04A5.24 5.24 0 0 1 10 6.667a6.247 6.247 0 0 1 2.553.7l.053.026Zm-.053 2.667A6.247 6.247 0 0 0 10 9.333a5.24 5.24 0 0 0-2.427.72h-.04A5.061 5.061 0 0 1 6 10.667V12a5.695 5.695 0 0 0 2.093-.707h.04A4.098 4.098 0 0 1 10 10.667a5.225 5.225 0 0 1 2.06.606h.053c.79.42 1.66.667 2.553.727v-1.333a5.228 5.228 0 0 1-2.06-.607h-.053Zm.113-5.307V2.667a1.333 1.333 0 0 0-1.333-1.334H4.666a1.333 1.333 0 0 0-1.333 1.334V4.78a6 6 0 0 0-2-.447v1.334a5.48 5.48 0 0 1 1.753.44h.067l.18.08v1.26a6 6 0 0 0-2-.447v1.333c.605.05 1.197.198 1.753.44h.067l.18.06v1.26a5.999 5.999 0 0 0-2-.446v1.333a5.506 5.506 0 0 1 1.753.44h.067l.18.06v1.853a1.333 1.333 0 0 0 1.333 1.334h6.667a1.333 1.333 0 0 0 1.333-1.334v-.46l-.553-.206h-.053c-.254-.114-.494-.22-.727-.307v.973H4.666V2.667h6.667V4.22A4.54 4.54 0 0 0 10 4a5.24 5.24 0 0 0-2.427.72h-.04A5.06 5.06 0 0 1 6 5.333v1.334a5.693 5.693 0 0 0 2.093-.707h.04A4.1 4.1 0 0 1 10 5.333a5.227 5.227 0 0 1 2.06.607h.053c.79.42 1.66.667 2.553.727V5.333c-.7-.053-1.38-.25-2-.58Z"
                      fill="#33FF77"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path d="M0 0h16v16H0z" fill="#fff"></path>
                    </clipPath>
                  </defs>
                </svg>

                <span className="h-[0.5em] w-[1px] rounded-full bg-gray-500"></span>
                <p>AQI</p>
                <span className="h-[0.5em] w-[1px] rounded-full bg-gray-500"></span>
                <p>32</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0.5em] p-[0.25em]">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 14.667c1.719 0 2.666-.9 2.666-2.534 0-2.162-2.158-3.914-2.25-3.987a.667.667 0 0 0-.833 0c-.092.073-2.25 1.825-2.25 3.987 0 1.634.947 2.534 2.667 2.534Zm0-5.093a4.102 4.102 0 0 1 1.333 2.56c0 .74-.223 1.2-1.333 1.2-1.11 0-1.334-.46-1.334-1.2A4.102 4.102 0 0 1 8 9.573ZM4.416 1.479a.667.667 0 0 0-.833 0c-.092.074-2.25 1.826-2.25 3.988C1.333 7.1 2.28 8 4 8c1.719 0 2.666-.9 2.666-2.533 0-2.162-2.158-3.914-2.25-3.988ZM4 6.667c-1.11 0-1.334-.46-1.334-1.2A4.102 4.102 0 0 1 4 2.907a4.102 4.102 0 0 1 1.333 2.56c0 .74-.223 1.2-1.333 1.2Zm8.416-5.188a.667.667 0 0 0-.833 0c-.092.074-2.25 1.826-2.25 3.988C9.333 7.1 10.28 8 12 8c1.719 0 2.666-.9 2.666-2.533 0-2.162-2.158-3.914-2.25-3.988ZM12 6.667c-1.11 0-1.334-.46-1.334-1.2A4.102 4.102 0 0 1 12 2.907a4.102 4.102 0 0 1 1.333 2.56c0 .74-.223 1.2-1.333 1.2Z"
                    fill="#00B9E8"
                  ></path>
                </svg>

                <span className="h-[0.5em] w-[1px] rounded-full bg-gray-500"></span>
                <p>Humidity</p>
                <span className="h-[0.5em] w-[1px] rounded-full bg-gray-500"></span>
                <p>45%</p>
              </div>
            </div>
            <div className="flex h-full w-[6rem] flex-col items-center py-[0.25em] text-[0.625em]">
              <div className="group relative z-0 h-[48px] w-[48px]">
                <svg
                  className="duration-200 ease-linear group-hover:-translate-y-[8px]"
                  viewBox="0 0 48 48"
                  fill="none"
                  height="48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M20.199 25.307c-1.343-6.396-6.887-10.646-12.383-9.492-5.497 1.153-8.864 7.274-7.521 13.67.829 3.949 3.259 7.078 6.29 8.625H4.328a1.505 1.505 0 1 0-1.376 2.114l.04-.002.038.002h11.944c.474 0 6.36-9.501 5.224-14.917Z"
                      fill="#6DC82A"
                    ></path>
                    <path
                      d="M20.198 25.307c-1.342-6.396-6.886-10.646-12.382-9.492a8.827 8.827 0 0 0-1.7.54c.735 6.883 2.302 16.451 5.598 23.15l-.182.111c-.354.216-.7.43-.986.608h4.43c.473 0 6.36-9.501 5.222-14.917Z"
                      fill="#5EAC24"
                    ></path>
                    <path
                      d="M47.705 29.485c1.343-6.396-2.024-12.517-7.52-13.67-5.497-1.154-11.04 3.096-12.383 9.492-1.137 5.416 4.75 14.917 5.223 14.917h11.944l.04-.002.039.002a1.506 1.506 0 1 0-1.377-2.115h-2.255c3.03-1.546 5.46-4.676 6.29-8.624Z"
                      fill="#6DC82A"
                    ></path>
                    <path
                      d="M27.802 25.307c1.342-6.396 6.886-10.646 12.383-9.492.592.124 1.16.307 1.7.54-.736 6.883-2.303 16.451-5.599 23.15.06.035.12.073.182.111.354.216.7.43.986.608h-4.43c-.472 0-6.36-9.501-5.222-14.917Z"
                      fill="#5EAC24"
                    ></path>
                    <path
                      d="M35.813 17.311H13.348l2.944 22.913h16.25l3.271-22.913Z"
                      fill="#4E901E"
                    ></path>
                    <path
                      d="M33.648 40.267c6.508-11.695 6.905-32.555 6.905-32.555a6.09 6.09 0 0 0-12.17-.321h-8.766a6.09 6.09 0 0 0-12.17.321s.636 21.945 6.906 32.555c0-.12-3.453 2.05-3.453 2.05h3.935l-.723 2.532 3.255-1.446.603 2.17 2.452-4.051s.254-.41.26-.611c.004-.169-.126-.443-.126-.443-1.128-3.242-6.642-20.457 3.445-20.457 10.341 0 4.665 17.098 3.463 20.423 0 0-.146.366-.146.477 0 .206.261.612.261.612l2.451 4.05.603-2.17 3.256 1.447-.724-2.533H37.1s-3.452-2.17-3.452-2.05Z"
                      fill="#91DC5A"
                    ></path>
                    <path
                      d="M11.098 43.081a.804.804 0 1 0 0-1.607.804.804 0 0 0 0 1.607Zm3.054 2.492a.804.804 0 1 0 0-1.608.804.804 0 0 0 0 1.608Zm3.778.804a.804.804 0 1 0 0-1.608.804.804 0 0 0 0 1.608Zm12.063 0a.804.804 0 1 0 0-1.608.804.804 0 0 0 0 1.608Zm3.9-.804a.804.804 0 1 0 0-1.608.804.804 0 0 0 0 1.608Zm3.18-2.492a.804.804 0 1 0 0-1.607.804.804 0 0 0 0 1.607Z"
                      fill="#5EAC24"
                    ></path>
                    <path
                      d="M13.544 12.699a4.547 4.547 0 1 0 0-9.093 4.547 4.547 0 0 0 0 9.093Z"
                      fill="#6DC82A"
                    ></path>
                    <path
                      d="M13.544 11.717A3.57 3.57 0 0 1 9.98 8.152a3.57 3.57 0 0 1 3.565-3.566 3.57 3.57 0 0 1 3.566 3.566 3.57 3.57 0 0 1-3.566 3.565Z"
                      fill="#5EAC24"
                    ></path>
                    <path
                      d="M15.736 8.708h-4.384a.558.558 0 0 1-.556-.556c0-.306.25-.557.556-.557h4.384c.305 0 .556.25.556.557 0 .305-.25.556-.556.556Z"
                      fill="#57565C"
                    ></path>
                    <path
                      d="M34.449 12.699a4.547 4.547 0 1 0 0-9.094 4.547 4.547 0 0 0 0 9.094Z"
                      fill="#6DC82A"
                    ></path>
                    <path
                      d="M34.45 11.717a3.57 3.57 0 0 1-3.566-3.565 3.57 3.57 0 0 1 3.566-3.566 3.57 3.57 0 0 1 3.565 3.566 3.57 3.57 0 0 1-3.566 3.565Z"
                      fill="#5EAC24"
                    ></path>
                    <path
                      d="M36.64 8.708h-4.383a.558.558 0 0 1-.556-.556c0-.306.25-.557.556-.557h4.384a.558.558 0 0 1 0 1.112Z"
                      fill="#57565C"
                    ></path>
                    <path
                      d="M13.633 17.555c-.706-.008-2.058-.41-2.18-1.868a.736.736 0 0 1 1.467-.123c.038.456.557.512.724.518h20.713c.167-.006.686-.062.724-.518a.735.735 0 1 1 1.467.123c-.122 1.459-1.474 1.86-2.172 1.868H13.633Z"
                      fill="#6DC82A"
                    ></path>
                    <path
                      d="M42.449 34.38a.736.736 0 0 1-.546-1.23c.313-.346.604-.728.865-1.134a.736.736 0 1 1 1.239.796 10.29 10.29 0 0 1-1.011 1.326.734.734 0 0 1-.547.243Zm2.375-4.764a.736.736 0 0 1-.721-.887c.453-2.155.198-4.32-.716-6.096a.736.736 0 0 1 1.308-.674c1.07 2.075 1.37 4.587.849 7.072a.736.736 0 0 1-.72.585Z"
                      fill="#5EAC24"
                    ></path>
                  </g>
                </svg>
                <span className="absolute bottom-[8px] left-1/2 z-[-1] h-[4px] w-[32px] -translate-x-1/2 bg-[#68082e] blur-[6px] duration-200 ease-linear group-hover:w-[16px] group-hover:blur-[4px]"></span>
              </div>
              <p className="text-center font-light">Feels like 24°C</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text Section: NOW ON RIGHT */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[55%] space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
          Explore the Climate of Samyak’s Home
        </h1>
        <p className="text-white/80 text-xs leading-relaxed">
          The Buddha Samyak Darshan Museum is located in Vaishali — a region
          with rich heritage and dynamic weather. Stay informed about the
          current climate to plan your visit with ease and comfort. Whether it’s
          a sunny day or a gentle breeze, experience culture with nature’s mood.
        </p>
      </motion.div>
    </div>
  );
};

export default WeatherInfo;
