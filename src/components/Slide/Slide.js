import React from "react";
import "./Slide.css";
import newImg1 from "../../assets/slideImgs/slider-image-1.jpg";
import newImg2 from "../../assets/slideImgs/slider-image-2.jpg";
import newImg3 from "../../assets/slideImgs/slider-image-3.jpg";
import newImg4 from "../../assets/slideImgs/slider-image-4.jpg";
import Button from "../Reusable-Components/Button";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContextProvider";
function Slide() {
  const Navigate = useNavigate();
  const { User } = useAuthContext();
  function handleNavigate() {
    User ? Navigate("/appLayout") : Navigate("/register");
  }
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active c-item" data-bs-interval={3000}>
          <img className="d-block w-100 c-image" src={newImg1} />
          <div className="carousel-caption d-block top-50">
            <h1 className="mb-5 d-block">Laptops for every need</h1>
            <p>
              Whether you're a student, a professional, or a gamer, we have the
              perfect laptop for you. Browse our wide selection of laptops from
              top brands like Dell, HP, and Lenovo.
            </p>
            <button onClick={() => handleNavigate()} className="shop">
              Shop Now
            </button>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval={3000}>
          <img src={newImg2} className="d-block w-100 c-image" alt="..." />
          <div data-aos="fade-up" className="carousel-caption d-block top-50">
            <h1 className="mb-5 d-block">Powerful Performance for Any Task</h1>
            <p>
              Shop the latest laptops from top brands like Dell, HP, and Lenovo.
              We have the latest models in stock, so you can be sure you're
              getting the latest technology.
            </p>
            <button onClick={() => handleNavigate()} className="shop">
              Shop Now
            </button>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval={3000}>
          <img src={newImg3} className="d-block w-100 c-image" alt="..." />
          <div data-aos="fade-up" className="carousel-caption  d-block top-50">
            <h1 className="mb-5 d-block">Unbeatable prices on laptops </h1>
            <p>
              We offer unbeatable prices on laptops. Compare our prices to the
              competition and see for yourself.
            </p>
            <button onClick={() => handleNavigate()} className="shop">
              Shop Now
            </button>
          </div>
        </div>

        <div className="carousel-item c-item" data-bs-interval={3000}>
          <img src={newImg4} className="d-block w-100 c-image" alt="..." />
          <div data-aos="fade-up" className="carousel-caption d-block top-50">
            <h1 className="mb-5 d-block"> Laptops with free shipping </h1>
            <p>
              Get free shipping on all laptops. This is a limited time offer, so
              don't miss out.
            </p>
            <button onClick={() => handleNavigate()} className="shop">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slide;
