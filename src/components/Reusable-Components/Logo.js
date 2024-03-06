import React from 'react'
import logo from "../../assets/logo.png";
function Logo() {
  return (
    <div className='logo'>
      <img src={logo} width="110px" alt='logo' style={{mixBlendMode:"plus-lighter"}} />
      <span className='d-none d-md-inline text-white text-uppercase'>Lap Shop</span>
    </div>
  )
}

export default Logo
