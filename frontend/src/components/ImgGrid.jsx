import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ImgGrid() {
  const { t } = useTranslation();
  const images = [
    "https://images.livemint.com/img/2023/04/15/original/Bihar_Museum_5_1681531344757.jpg", // 2
    "https://assets.cntraveller.in/photos/60ba27a40f3a5367ec9feabf/master/w_1600%2Cc_limit/Didarganj-Yakshi-Custom.jpg", // 3
    "https://media-cdn.tripadvisor.com/media/photo-s/16/64/99/b5/gandhara-bodhisattva.jpg", // 4
    "https://images.livemint.com/img/2023/04/15/original/Bihar_Museum_4_1681529943952.jpg", // 5
    "https://cdn.exoticindia.com/images/products/original/books-2019-004/hac866j.jpg", // 6
    "https://images.livemint.com/img/2023/04/15/original/Narodakini_Bihar_Museum_1681531527538.jpg", // 7
    "https://wanderinganusuya.com/wp-content/uploads/2020/08/Inside-Regional-Art-Gallery-scaled.jpg", // 8
  ];

  return (
    <div className="bg-black px-6 pt-10 relative z-0">
      <h2
        className="text-2xl md:text-4xl font-bold text-white pt-6 pl-6"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
       {t("ImgGridHeading")}
      </h2>

      <div className="grid grid-cols-6 grid-rows-12 gap-4 pt-24 px-2 md:px-6">
        <div className="col-span-2 row-span-5 col-start-1 row-start-2 overflow-hidden">
          <img src={images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="col-span-2 row-span-5 col-start-3 row-start-1 overflow-hidden">
          <img src={images[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="col-span-2 row-span-5 col-start-5 row-start-2 overflow-hidden">
          <img src={images[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="col-span-2 row-span-4 col-start-1 row-start-7 overflow-hidden">
          <img src={images[3]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="col-span-2 row-span-4 col-start-3 row-start-6 overflow-hidden">
          <img src={images[4]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="col-span-2 row-span-5 col-start-5 row-start-7 overflow-hidden">
          <img src={images[5]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-10 overflow-hidden">
          <img src={images[6]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[45rem] bg-gradient-to-t from-black to-transparent z-10">

        <Link to="/exploreMore" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 font-medium text-lg hover:scale-105 transition-transform">
          {t("ImgGridButton")}
        </Link>
      </div>
    </div>
  );
}

export default ImgGrid;
