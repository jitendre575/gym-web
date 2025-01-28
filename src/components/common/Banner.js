import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import banner from "../../assets/img/main-slider/slider1/d-1.png";
import banner2 from "../../assets/img/main-slider/slider1/d-2.png";
import banner3 from "../../assets/img/main-slider/slider1/d-3.png";

function Banner() {
  // Array of slide data (image paths)
  const slideData = [banner, banner2, banner3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <div key={index}>  {/* Using index as a unique key */}
            <img src={slide} alt={`slide-${index}`} />  {/* Directly using the image path */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;