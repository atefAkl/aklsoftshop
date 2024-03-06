import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./TopTape.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useShopContext } from '../../Context/ShopContextProvider';
function TopTape() {
    const {getPosition,position,isLoading,cityName,country,emoji}= useShopContext();
  return (
    
    <div className='TopTap'>
    <div className='container'> 
    <div className='left'>
       {!position && (<button onClick={getPosition} className='locationBtn'><LocationOnIcon/> {isLoading ? "...loading" : "Use Your Location"}</button> )} 
       {position && (<p className='address mt-2 fw-bold'><LocationOnIcon/> {emoji} {cityName},{country}</p>)}
    </div>
    <div className='right'>
        <div><LocalPhoneIcon/> Call 199123</div>
        <div className='d-none d-md-block'>English</div>
    </div>
</div>
    </div>
    
  )
}

export default TopTape
