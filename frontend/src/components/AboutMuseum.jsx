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
      className="bg-black/90 rounded-xl text-white p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-6">
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
          src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover shadow-2xl drop-shadow-blue-800"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm" />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 grid-rows-4 gap-4 max-w-7xl mx-auto p-2">
          {/* Text Block 1 with Image */}
          <div className="col-span-2 row-span-1 bg-white bg-opacity-90 text-black   rounded-xl overflow-hidden flex flex-col">
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-lg font-bold mb-1">Efficiency First</h2>
              <p className="text-lg flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus magni eligendi rerum fuga accusantium maiores iure,
                enim explicabo hic saepe similique quos, dicta culpa autem
                doloribus optio tempore corrupti fugiat ea placeat nam id
                blanditiis velit nemo? Adipisci perspiciatis ab animi? A placeat
                dolores animi, fugit, tempora sequi rerum itaque veritatis
                ratione repellat quasi voluptatum nihil? Atque ex voluptas sunt
                mollitia tempore ratione quae libero, necessitatibus obcaecati
                excepturi earum consequatur, voluptate fugit recusandae odio
                maiores non. Consectetur fugit, exercitationem maxime ipsum
                corrupti dolorum dicta error perspiciatis aperiam blanditiis
                tempora amet enim, nisi laboriosam maiores aut repellat
                doloribus praesentium dolores illum? Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Morbi tristique senectus et netus
                et malesuada.
              </p>
            </div>
          </div>

          {/* Image Block 2 */}
          <div className="col-span-3 row-span-1 col-start-3 rounded-xl overflow-hidden">
            <img
            style={{
    boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
  }}
              src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg"
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
              src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg"
              alt="Block 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Block 4 */}
          <div className="col-span-2 row-span-1 col-start-4 row-start-2 bg-white  bg-opacity-90 text-black rounded-xl overflow-hidden flex flex-col">
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-lg font-bold mb-1">Efficiency First</h2>
              <p className="text-lg flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus magni eligendi rerum fuga accusantium maiores iure,
                enim explicabo hic saepe similique quos, dicta culpa autem
                doloribus optio tempore corrupti fugiat ea placeat nam id
                blanditiis velit nemo? Adipisci perspiciatis ab animi? A placeat
                dolores animi, fugit, tempora sequi rerum itaque veritatis
                ratione repellat quasi voluptatum nihil? Atque ex voluptas sunt
                mollitia tempore ratione quae libero, necessitatibus obcaecati
                excepturi earum consequatur, voluptate fugit recusandae odio
                maiores non. Consectetur fugit, exercitationem maxime ipsum
                corrupti dolorum dicta error perspiciatis aperiam blanditiis
                tempora amet enim, nisi laboriosam maiores aut repellat
                doloribus praesentium dolores illum? Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Morbi tristique senectus et netus
                et malesuada.
              </p>
            </div>
          </div>

          {/* Text Block 5 */}
          <div className="col-span-2 row-span-1 row-start-3 bg-white bg-opacity-90 text-black rounded-xl  overflow-hidden flex flex-col">
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-lg font-bold mb-1">Efficiency First</h2>
              <p className="text-lg flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus magni eligendi rerum fuga accusantium maiores iure,
                enim explicabo hic saepe similique quos, dicta culpa autem
                doloribus optio tempore corrupti fugiat ea placeat nam id
                blanditiis velit nemo? Adipisci perspiciatis ab animi? A placeat
                dolores animi, fugit, tempora sequi rerum itaque veritatis
                ratione repellat quasi voluptatum nihil? Atque ex voluptas sunt
                mollitia tempore ratione quae libero, necessitatibus obcaecati
                excepturi earum consequatur, voluptate fugit recusandae odio
                maiores non. Consectetur fugit, exercitationem maxime ipsum
                corrupti dolorum dicta error perspiciatis aperiam blanditiis
                tempora amet enim, nisi laboriosam maiores aut repellat
                doloribus praesentium dolores illum? Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Morbi tristique senectus et netus
                et malesuada.
              </p>
            </div>
          </div>

          {/* Image Block 6 */}
          <div className="col-span-3 row-span-1 col-start-3 row-start-3 rounded-xl overflow-hidden">
            <img
            style={{
    boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
  }}
              src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg"
              alt="Block 6"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image Block 7 */}
          <div className="col-span-3 row-span-1 row-start-4 rounded-xl overflow-hidden">
            <img
            style={{
    boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
  }}
              src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg"
              alt="Block 7"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Block 8 */}
          <div className="col-span-2 row-span-1 col-start-4 row-start-4 bg-white bg-opacity-90 text-black  rounded-xl overflow-hidden flex flex-col">
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-lg font-bold mb-1">Efficiency First</h2>
              <p className="text-lg flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus magni eligendi rerum fuga accusantium maiores iure,
                enim explicabo hic saepe similique quos, dicta culpa autem
                doloribus optio tempore corrupti fugiat ea placeat nam id
                blanditiis velit nemo? Adipisci perspiciatis ab animi? A placeat
                dolores animi, fugit, tempora sequi rerum itaque veritatis
                ratione repellat quasi voluptatum nihil? Atque ex voluptas sunt
                mollitia tempore ratione quae libero, necessitatibus obcaecati
                excepturi earum consequatur, voluptate fugit recusandae odio
                maiores non. Consectetur fugit, exercitationem maxime ipsum
                corrupti dolorum dicta error perspiciatis aperiam blanditiis
                tempora amet enim, nisi laboriosam maiores aut repellat
                doloribus praesentium dolores illum? Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Morbi tristique senectus et netus
                et malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMuseum;