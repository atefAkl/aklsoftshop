import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandSlide.css";
import Slider from "react-slick";
import { BRANDS } from "../../data/data";
function BrandSlide() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 20000,
    cssEase: "linear",
  };
  return (
    <div
      className="brands py-5"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="slider-container">
        <Slider {...settings}>
          {BRANDS.map((brand) => (
            <div
              key={brand.brand}
              style={{ height: "50px", width: "100px", margin: "0px 20px" }}
            >
              <img
                alt={brand.brand}
                style={{
                  width: "100px",
                  aspectRatio: "3/2",
                  objectFit: "contain",
                }}
                src={brand.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BrandSlide;
