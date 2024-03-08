import React, { useState } from 'react'
import { useShopContext } from '../../Context/ShopContextProvider'
import "./LaptopDetails.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import EightKPlusIcon from '@mui/icons-material/EightKPlus';
import BackpackIcon from '@mui/icons-material/Backpack';
import Slider from "react-slick";
import { LAPTOPS } from '../../data/data';

function LaptopDetails() {
    const {LaptopId,dispatch} = useShopContext();
    const [{brand,model,processor,ram,storage,display_size,graphics_card}] = LAPTOPS.filter((lap)=>lap.id == LaptopId);
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
    {
        icon:<MemoryIcon/>,title:"Processor",value:processor
    },
    {
        icon:<BackpackIcon/>,title:"RAM",value:ram
    },
    {
        icon:<StorageIcon/>,title:"Storage",value:storage
    },
    {
        icon:<EightKPlusIcon/>,title:"Graphic Card",value:graphics_card
    },
    {
        icon:<LaptopWindowsIcon/>,title:"Display Size",value:display_size
    },
];
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <NavigateNextIcon />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <ChevronLeftIcon />
          </div>
        );
      };
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
  return (
    <div className='productDetails' data-aos="zoom-in" >
        <button onClick={()=>dispatch({type:"closed"})} className='closeDetails'><CloseOutlinedIcon/></button>
        <h3 className='head'>{brand} {model}</h3>
        <Slider {...settings}>
        {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <h4>{img.icon}</h4>
                <h3>{img.title}</h3>
                <p>{img.value}</p>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default LaptopDetails
