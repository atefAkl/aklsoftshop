import React from 'react'
import "./Slide.css";
import newImg1 from "../../assets/slideImgs/slide1.jpg";
import newImg2 from "../../assets/slideImgs/slide2.jpg";
import newImg3 from "../../assets/slideImgs/s;ide3.jpg";
import newImg4 from "../../assets/slideImgs/slide4.jpg";
import Button from '../Reusable-Components/Button';
function Slide() {

  return (
    <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"

>
  <div className="carousel-inner">
  <div className="carousel-item active c-item"  data-bs-interval={10000}>
    <img className='d-block w-100 c-image' src={newImg1}/>
    <div  className="carousel-caption d-block">
        <p className="mt-5 fs-3 text-uppercase">Get ready to be amazed by our laptops' stunning visuals and graphics capabilities.</p>
        <h1 className="mb-2 d-none  d-md-block">Immersive Visuals and Stunning Graphics</h1>
        <Button  type="primaryy">Shop Now</Button>
      </div> 
    
    </div>
    <div className="carousel-item c-item"  data-bs-interval={4000}>
      <img src={newImg2} className="d-block w-100 c-image" alt="..." />
      <div data-aos="fade-up" className="carousel-caption d-block">
        <p className="mt-5 fs-3 text-uppercase">Discover our wide range of high-performance laptops</p>
        <h1 className="d-none d-md-block">Powerful Performance for Any Task</h1>
        <Button  type="primaryy">Shop Now</Button>
      </div>
    </div>
    <div className="carousel-item c-item" data-bs-interval={4000}>
      <img src={newImg3} className="d-block w-100 c-image" alt="..." />
      <div data-aos="fade-up" className="carousel-caption  d-block">
        <p className="mt-5 fs-3 text-uppercase">Experience the perfect blend of form and function with our collection of sleek and stylish laptops.</p>
        <h1 className="d-none d-md-block">Sleek and Stylish Designs </h1>
        <Button  type="primaryy">Shop Now</Button>
      </div>
      
    </div>
    
    <div  className="carousel-item c-item" data-bs-interval={4000} > 
      <img src={newImg4} className="d-block w-100 c-image" alt="..." />
      <div data-aos="fade-up" className="carousel-caption d-block">
        <p className="mt-5 fs-3 text-uppercase">Never miss a beat with our laptops' seamless connectivity options.</p>
        <h1 className="d-none d-md-block"> Stay Connected Anywhere, Anytime</h1>
        <Button  type="primaryy">Shop Now</Button>
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


  )
}

export default Slide
