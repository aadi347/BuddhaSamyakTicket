import React from "react";
import { Instagram, Twitter, Mail, PhoneCall } from "lucide-react";

function AboutMuseum() {
  return (
    <div className="min-h-screen text-white px-20 py-8 bg-white">
      {/* 🌟 Banner Section */}
      <div
        style={{
          boxShadow: "0 0 40px 10px rgba(80, 159, 228, 0.25)",
        }}
        className="relative h-40 md:h-56 flex items-center justify-center rounded-lg overflow-hidden mb-8"
      >
        <img
          src="/gggg.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4 py-2 rounded-md">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Explore More
          </h1>
        </div>
      </div>

      {/* 🚀 Social & Contact Footer Section */}
      <div
        style={{
          boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
        }}
        className="bg-black/90 rounded-xl  p-6 flex flex-col md:flex-row items-center justify-between md:space-y-0 mb-6"
      >
        {/* Text */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            convallis nulla. Donec ut diam nec nisi iaculis fermentum.
          </p>
        </div>

        {/* Icons */}
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

      {/* 🔸 Explore Section */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <img
          style={{
            boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
          }}
          src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover shadow-2xl drop-shadow-blue-800"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm" />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 grid-rows-4 gap-4 max-w-7xl mx-auto p-2">
          {/* Text Block 1 with Image */}
          <div className="col-span-2 row-span-1 bg-white bg-opacity-90 text-black   rounded-xl overflow-hidden flex flex-col">
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-1">
                The Stupa and Museum Exterior
              </h2>
              <p className="text-lg flex-1 pt-5">
                The Buddha Samyak Darshan Museum and Memorial Stupa is an
                ambitious project in Vaishali district, Bihar, conceived to
                enshrine sacred relics of Gautama Buddha dating to the 6th
                century BCE. Spanning a vast 72‑acre site, this monumental stone
                structure is being built with technical assistance from
                IIT Delhi, supported by a ₹315 crore budget. The centerpiece is
                a massive stupa meant to display relics unearthed in Vaishali’s
                archaeological digs in the late 1950s–60s—ashes, a conch, beads,
                a golden leaf, and a coin. Groundbreaking took place on 20
                February 2019 under chief minister Nitish Kumar after cabinet
                approval on 9 February 2013. The site is located about 60 km
                from Patna.
              </p>
            </div>
          </div>

          {/* Image Block 2 */}
          <div className="col-span-3 row-span-1 col-start-3 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Block 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image Block 3 */}
          <div className="col-span-3 row-span-1 row-start-2 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Block 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Block 4 */}
          <div className="col-span-2 row-span-1 col-start-4 row-start-2 bg-white  bg-opacity-90 text-black rounded-xl overflow-hidden flex flex-col">
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-1">
                Historical Context & Relics
              </h2>
              <p className="text-lg flex-1 pt-5">
                This site honors the “Relic Stupa” originally built to house
                one‑eighth of the Buddha’s remains, as gifted by the Buddha to
                Vaishali’s Licchavi king following his Mahaparinirvana in
                Kushinagar. The relic casket, buried in a 5th‑century BCE brick
                stupa and discovered by archeologist Anant Sadashiv Altekar
                between 1958 and 1960, contained a fascinating mix of holy
                ashes, a small conch shell, beads, a fine golden leaf, and a
                copper coin. Plans for the museum include exhibition galleries,
                3D models, multimedia presentations, and an interpretation
                centre, all inspired by the Global Vipassana Pagoda in Mumbai.
              </p>
            </div>
          </div>

          {/* Text Block 5 */}
          <div className="col-span-2 row-span-1 row-start-3 bg-white bg-opacity-90 text-black rounded-xl  overflow-hidden flex flex-col">
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-1">
                Visitor Experience & Exhibition
              </h2>
              <p className="text-lg flex-1 pt-5">
                Envisioned as both a pilgrimage site and immersive educational
                experience, this museum–stupa complex will feature art
                galleries, interpretation spaces, multimedia displays, and
                animated films to guide visitors through the Buddha’s life and
                legacy. Visitors can expect a carefully designed environment for
                spiritual reflection and learning, with the stupa itself serving
                as a focal site for relic viewing. Drawing structural and
                technical insights from IIT Delhi, the site promises
                architectural elegance paired with scholarly rigor. Once
                completed, it will rank among India’s largest Buddhist heritage
                destinations, inviting pilgrims, tourists, and scholars to
                deepen their connection with the Buddha's enduring legacy.
              </p>
            </div>
          </div>

          {/* Image Block 6 */}
          <div className="col-span-3 row-span-1 col-start-3 row-start-3 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Block 6"
              className="w-full h-full object-cover"
            />
          </div>

         
       
        </div>
      </div>
    </div>
  );
}

export default AboutMuseum;
