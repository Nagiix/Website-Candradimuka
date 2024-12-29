
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [
    <div key="1" className="flex flex-col items-center justify-center w-full h-full">
      <img
        src="res_img/Characters/Semar.png"
        alt="Semar"
        className="w-auto h-[300px] object-contain"
      />
      <p className="mt-4 text-[#ffffff]">This is the description for Semar.</p>
    </div>,
    <div key="2" className="flex flex-col items-center justify-center w-full h-full">
      <img
        src="res_img/Characters/Semar.png"
        alt="Gareng"
        className="w-auto h-[300px] object-contain"
      />
      <p className="mt-4 text-[#ffffff]">This is the description for Gareng.</p>
    </div>,
    <div key="3" className="flex flex-col items-center justify-center w-full h-full">
      <img
        src="res_img/Characters/Semar.png"
        alt="Bagong"
        className="w-auto h-[300px] object-contain"
      />
      <p className="mt-4 text-[#ffffff]">This is the description for Bagong.</p>
    </div>,
  ];

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="relative w-[1000px] h-[1000px] overflow-hidden">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${pages.length * 33}%`, // Ensure container takes up the total width of all items combined
        }}
      >
        {pages.map((page, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
            {page}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevPage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
        aria-label="Previous"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextPage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
        aria-label="Next"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
