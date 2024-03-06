import React from 'react'
import "./Slide.css";
// import img1 from "../assets/slideImgs/img_slide.jpg";
import img2 from "../assets/slideImgs/slide_img2.png";
import img3 from "../assets/slideImgs/slide_img3.png";
import img4 from "../assets/slideImgs/slide_img4.png";
import vid from "../assets/slideImgs/Shooting-Aspire-Vero-16-Sapphire-Banner.mp4";
import Button from './Button';
import { useNavigate } from 'react-router-dom';
function Slide() {
  const navigate = useNavigate();
  return (
    <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"

>
  <div className="carousel-inner">
  <div className="carousel-item active"  data-bs-interval={10000}>
    <video className='d-block w-100'style={{objectFit:"contain",height:"100%"}} src={vid} autoPlay muted loop/>
    <div  className="carousel-caption  d-block">
        <h5>Immersive Visuals and Stunning Graphics</h5>
        <p>Get ready to be amazed by our laptops' stunning visuals and graphics capabilities. </p>
        <Button  type="primaryy">Shop Now</Button>
      </div>
    
    </div>
    <div className="carousel-item "  data-bs-interval={4000}>
      <img src={img3} className="d-block w-100" alt="..." />
      <div data-aos="fade-up" className="carousel-caption  d-block">
        <h5>Powerful Performance for Any Task</h5>
        <p>Discover our wide range of high-performance laptops</p>
        <Button  type="primaryy">Shop Now</Button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={4000}>
      <img src={img2} className="d-block w-100" alt="..." />
      <div data-aos="fade-up" className="carousel-caption  d-block">
        <h5>Sleek and Stylish Designs</h5>
        <p>Experience the perfect blend of form and function with our collection of sleek and stylish laptops. </p>
        <Button  type="primaryy">Shop Now</Button>
      </div>
      
    </div>
    
    <div  className="carousel-item" data-bs-interval={4000} > 
      <img src={img4} className="d-block w-100" alt="..." />
      <div data-aos="fade-up" className="carousel-caption d-block">
        <h5>Stay Connected Anywhere, Anytime</h5>
        <p>Never miss a beat with our laptops' seamless connectivity options. </p>
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
