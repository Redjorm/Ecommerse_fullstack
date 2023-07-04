import React, { useState } from "react";
import "./styles/sliderimg.css";
const SliderImg = ({ product }) => {
  const [numberImg, setNumberImg] = useState(0);

  const objStyle = {
    transform: `translateX(calc(-${numberImg}/3 * 100%))`,
  };

  const handlePrev = () => {
    if (numberImg - 1 < 0) {
      setNumberImg(2);
    } else {
      setNumberImg(numberImg - 1);
    }
  };

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      setNumberImg(0);
    } else {
      setNumberImg(numberImg + 1);
    }
  };

  return (
    <div className="sliderimg__header">
      <div style={objStyle} className="slider__interior">
        {product?.productImgs.map((imgInfo) => (
          <div className="slider__img">
            <img
              className="sliderimg__img"
              key={imgInfo.id}
              src={imgInfo.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderImg;
