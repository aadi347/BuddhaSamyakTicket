import React from "react";
import { Instagram, Twitter, Mail, PhoneCall } from "lucide-react";

function AboutMuseum() {
  const StayConnected = () => (
    <div className="bg-black/90 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between mt-10 text-white">
      <div className="text-center md:text-left max-w-md mb-4 md:mb-0">
        <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          convallis nulla. Donec ut diam nec nisi iaculis fermentum.
        </p>
      </div>
      <div className="flex gap-6 items-center text-white text-xl">
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-all duration-200"
        >
          <Instagram />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-blue-400 transition-all duration-200"
        >
          <Twitter />
        </a>
        <a
          href="mailto:info@example.com"
          aria-label="Mail"
          className="hover:text-yellow-400 transition-all duration-200"
        >
          <Mail />
        </a>
        <a
          href="tel:+911234567890"
          aria-label="Call"
          className="hover:text-green-400 transition-all duration-200"
        >
          <PhoneCall />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white py-8 bg-white">
      {/* 🌟 Banner Section */}
      <div className="w-full px-4 md:px-20">
        <div className="relative h-40 md:h-56 flex items-center justify-center rounded-lg overflow-hidden mb-8  ">
          <img
            src="/gggg.jpg"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center px-4 py-2 rounded-md  ">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Explore More
            </h1>
          </div>
        </div>
      </div>

      {/* ✅ Stay Connected for large screens */}
      <div className="hidden md:block">
        <div className="w-full px-4 md:px-20">{StayConnected()}</div>
      </div>

      {/* 🔸 Explore Section */}
      <div className="space-y-6 w-full px-4 md:px-20 mt-10">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
            <h2 className="text-xl font-bold mb-1">
              The Stupa and Museum Exterior
            </h2>
            <p className="text-lg pt-5">
              The Buddha Samyak Darshan Museum and Memorial Stupa is an
              ambitious project in Vaishali district, Bihar...
            </p>
          </div>
          <div className="md:w-3/5 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Museum Exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="md:w-3/5 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Relics"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
            <h2 className="text-xl font-bold mb-1">
              Historical Context & Relics
            </h2>
            <p className="text-lg pt-5">
              This site honors the “Relic Stupa” originally built to house
              one‑eighth of the Buddha’s remains...
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
            <h2 className="text-xl font-bold mb-1">
              Visitor Experience & Exhibition
            </h2>
            <p className="text-lg pt-5">
              The museum–stupa complex is designed as a spiritual and
              educational site...
            </p>
          </div>
          <div className="md:w-3/5 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Visitor Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ✅ Stay Connected for mobile (bottom only) */}
      <div className="block md:hidden">
        <div className="w-full px-4 md:px-20">{StayConnected()}</div>
      </div>
    </div>
  );
}

export default AboutMuseum;
