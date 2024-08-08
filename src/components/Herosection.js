import React, { useState } from "react";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";

const Section1 = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto ">
      <div
        className="overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("./images/bg.jpeg")',
        }}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full pt-16">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full ${
          currentIndex === images.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Section1;
