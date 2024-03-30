import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwipperCore from "swiper/core";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { Reviews } from "../../data/data";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./testimonials.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwipperCore.use([Pagination, Navigation]);
const Testimonials = () => {
  const swiper = useSwiper();
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Said</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {Reviews.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="slide-item">
                <img src={testimonial.image} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.quote}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
