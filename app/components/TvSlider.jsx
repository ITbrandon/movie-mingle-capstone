"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function TvSlider() {
  const slides = [
    {
      url: `https://wallpapercave.com/wp/wp1825208.jpg`,
    },
    {
      url: `https://i.ebayimg.com/images/g/WSkAAOSwzxhhg9xg/s-l1200.webp`,
    },
    {
      url: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggibdkzFnip67F-koSHTIcU0OPNV8KvFfQI5y_gXhIKQsElfCMkYv_0SAd3uz_SiCbHZmpg5hwtF-Ic_hmKSfgU_ZtPpqumFqmzqNJ2uke6l8ORVyFJaYOemhSIoOo6ydx_jiyb1tzIDEq/w1920-h1080-c/colossal-titan-attack-titan-attack-on-titan-uhdpaper.com-4K-176.jpg`,
    },

    {
      url: `https://i.pinimg.com/originals/4d/53/8b/4d538b14bb80c94cb957ee00581d56fe.png`,
    },
    {
      url: `https://images2.alphacoders.com/133/1337348.jpeg`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-600 hover:bg-orange-200 duration-300  text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-600 hover:bg-orange-200 duration-300 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TvSlider;
