import React from 'react';

function ImgGrid() {
  return (
    <div className="bg-black p-6 relative z-0">
      <h2
        className="text-6xl font-bold text-white pt-6 pl-6"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        In the Light of the Buddha,<br /> Truth Blossoms.
      </h2>

      <div className="grid grid-cols-6 grid-rows-12 gap-7 bg-black p-4 pt-36">
        <div className="col-span-2 row-span-6 col-start-1 row-start-2">
          <img
            src="https://images.livemint.com/img/2023/04/15/original/Bihar_Museum_5_1681531344757.jpg"
            alt="Placeholder 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-6 col-start-5 row-start-2">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/16/64/99/b5/gandhara-bodhisattva.jpg"
            alt="Placeholder 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-4 col-start-1 row-start-8">
          <img
            src="https://images.livemint.com/img/2023/04/15/original/Bihar_Museum_4_1681529943952.jpg"
            alt="Placeholder 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-6 col-start-3 row-start-7">
          <img
            src="https://cdn.exoticindia.com/images/products/original/books-2019-004/hac866j.jpg"
            alt="Placeholder 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-4 col-start-5 row-start-8">
          <img
            src="https://images.livemint.com/img/2023/04/15/original/Narodakini_Bihar_Museum_1681531527538.jpg"
            alt="Placeholder 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-6 col-start-3 row-start-1">
          <img
            src="https://assets.cntraveller.in/photos/60ba27a40f3a5367ec9feabf/master/w_1600%2Cc_limit/Didarganj-Yakshi-Custom.jpg"
            alt="Placeholder 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className='absolute   bottom-0 left-0 w-full h-[45rem] bg-gradient-to-t from-black to-transparent z-10'>
        <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded'>
          Explore More
        </button>
      </div>

    </div>
  );
}

export default ImgGrid;
