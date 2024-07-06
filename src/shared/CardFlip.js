import React, { useState } from "react";

const CardFlip = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000" onClick={handleClick}>
      <div className="w-64 h-64 border-transparent bg-gray-700 rounded-lg transform transition-transform duration-500 hover:scale-105 filter grayscale hover:filter-none">
        <div
          className={`relative w-64 h-64 cursor-pointer transform-style-preserve-3d transition-transform duration-500 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute w-full h-full backface-hidden">
            <img
              src={image}
              alt="Front Image"
              className="p-3 w-full h-full object-cover "
            />
          </div>
          <div className="absolute w-full h-full bg-stone-200 rounded-lg text-center backface-hidden rotate-y-180">
            <div className="flex flex-col items-center justify-center h-full p-4">
              <h2 className="text-lg font-bold text-gray-700">{title}</h2>
              <p className="mt-2 text-xs text-gray-600 text-justify">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
