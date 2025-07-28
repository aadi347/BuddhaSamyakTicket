import React, { useRef } from "react";
import { Instagram, Twitter, Mail, PhoneCall } from "lucide-react";
import Navbar from "./Navbar";

function AboutMuseum() {
  const videoRef = useRef(null); // ✅ Add this line

  const StayConnected = () => (
    <>

      <div className="bg-black/90 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between mt-10 text-white">
        <div className="text-center md:text-left  mb-4 md:mb-0 ">
          <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
          <p className="text-sm pr-36">
  Follow us to stay updated on upcoming events, exhibitions, and special experiences at the Buddha Samyak Darshan Museum. Be part of our growing community of heritage enthusiasts and spiritual seekers.
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
    </>
  );

  return (
    <>
      <Navbar />
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
              <h2 className="text-3xl font-bold mb-1">
                Historical Background and Archaeological Discoveries
              </h2>
              <p className="text-lg pt-5 text-justify">
                During the scientific excavations carried out between 1958 and 1960 by the renowned historian and archaeologist Dr. A.S. Altekar at the Vaishali archaeological site, the sacred relics of Lord Buddha were unearthed. These relics were preserved in a mud stupa established by the ancient Lichchhavi Republic.

                Alongside the relics, a copper-engraved coin, a shell fragment, two beads, and thin gold leaves were discovered, all carefully stored in a soapstone casket. These findings confirmed the significance of Vaishali as an important center of Buddhist heritage.

                The discovery not only added historical and archaeological depth to the region but also created a sense of spiritual reverence. In 1972, the sacred relics were respectfully transferred to Patna Museum where they have been kept under secure and preserved conditions for public awareness and scholarly research.

                These artifacts serve as a vital link to the time of the Buddha and the ancient republic that once thrived in this region. They continue to inspire generations of seekers, historians, and pilgrims from across the globe who visit this sacred land in search of truth and heritage.

              </p>            </div>
            <div className="md:w-3/5 rounded-xl overflow-hidden" style={{
              boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
            }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              >
                <source src="/sec4stupa.mp4" type="video/mp4" />
              </video>
            </div>

          </div>

          {/* Block 2 */}
          <div className="flex flex-col-reverse md:flex-row gap-4 my-16">
            <div className="md:w-3/5 rounded-xl overflow-hidden">
              <img
                style={{
                  boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
                }}
                src="vc.jpeg"
                alt="Relics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
              <h2 className="text-3xl font-bold mb-1">
                Government Initiative and Project Vision
              </h2>
              <p className="text-lg pt-5 text-justify">
                Recognizing the immense historical, archaeological, and spiritual value of Lord Buddha’s sacred relics preserved in the Patna Museum, the Government of Bihar took a significant step toward honoring this legacy. Through official notifications dated April 8, 2005 (No. 167) and May 12, 2010 (No. 15), it was formally resolved to establish the “Buddha Samyak Darshan Museum and Memorial Stupa” at Vaishali — the very site where the relics were originally discovered.

                The decision was shaped not only by scholarly consensus but also by widespread public desire to view and engage with these sacred items. The museum is envisioned as a world-class institution that will display the sacred relics, rare Buddhist antiquities, artistic sculptures, and curated exhibits on Buddha’s life, teachings, and philosophy.

                The project includes modern infrastructure for digital storytelling, thematic galleries, and interactive installations that allow visitors to experience the spiritual and cultural ethos of Buddhism. The architectural design has been crafted to harmonize ancient tradition with modern expression, enhancing both visual appeal and visitor immersion.

                The initiative underscores Bihar’s commitment to preserving Buddhist heritage and to transforming Vaishali into a global destination for pilgrims, historians, and tourists alike.              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
              <h2 className="text-3xl font-bold mb-1">
                Significance, Objectives, and Expected Impact
              </h2>
              <p className="text-xl pt-5 text-justify">
                The Buddha Samyak Darshan Museum is more than a tribute to the past — it is a visionary project aimed at creating lasting cultural, spiritual, and educational value. By offering a space for reflection and discovery, it will serve as a beacon for domestic and international visitors interested in Buddhist heritage, peace, and philosophy.

                Through carefully curated exhibits and interactive platforms, the museum will help scholars, students, and spiritual seekers explore the life and teachings of Lord Buddha, particularly his emphasis on compassion, truth, non-violence, and mindful living. Special educational programs and exhibitions will be tailored to engage young minds and promote values rooted in India’s civilizational heritage.

                The project also holds enormous potential for regional development. With improved tourism infrastructure, guided tours, and cultural festivals, Vaishali will be elevated to an international cultural circuit — attracting global travelers, academic institutions, and Buddhist organizations from around the world.

                Ultimately, the museum and stupa will serve as a living bridge between history and modernity — nurturing a deeper understanding of Buddhist ideals while boosting cultural tourism, economic growth, and international goodwill.              </p>
            </div>
            <div className="md:w-3/5 rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
                style={{
                  boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
                }}
              >
                <source src="/gallery.mp4" type="video/mp4" />
              </video>

            </div>
          </div>
        </div>

        {/* ✅ Stay Connected for mobile (bottom only) */}
        <div className="block md:hidden">
          <div className="w-full px-4 md:px-20">{StayConnected()}</div>
        </div>
      </div>
    </>
  );
}

export default AboutMuseum;