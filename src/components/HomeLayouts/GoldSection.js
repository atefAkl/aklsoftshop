import React from 'react'
import GoldImg from "../../assets/GoldImage.jpg"
import "./GoldSection.css";
function GoldSection() {
  return (
    <div className='GoldContainer' style={{backgroundImage:`url(${GoldImg})`}}>
    <div className='details text-center text-md-start '>
        <h2 className='text-uppercase'>Lap Shop</h2>
        <p>Welcome to our laptop shop, where technology meets your needs. 
        Discover a wide range of cutting-edge laptops designed to enhance your productivity and elevate your digital experience.
        </p>
    </div>
    </div>
  )
}

export default GoldSection
