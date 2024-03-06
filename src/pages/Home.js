import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Slide from "../components/Slide/Slide.js"
import BrandSlide from '../components/HomeLayouts/BrandSlide.js'
import Footer from '../components/Footer/Footer.js'
import AdvantagesSec from '../components/HomeLayouts/AdvantagesSec.js'
import TopProducts from '../components/HomeLayouts/TopProducts.js'
import Cart from '../components/Cart/Cart.js';
import { ToastContainer } from 'react-toastify';
import { useShopContext } from '../Context/ShopContextProvider'
import GoldSection from '../components/HomeLayouts/GoldSection.js'
import TopTape from '../components/HomeLayouts/TopTape.js'

function Home() {
  const {isOpened} = useShopContext();
  
  return (
    <div className='home' style={{overflow:"hidden"}}>
        <TopTape/>
        <NavBar/>
        <ToastContainer/>
        <Slide/>
        {isOpened? <Cart/> : null}     
        <BrandSlide/>
        <TopProducts/>
        <GoldSection/>
        <AdvantagesSec/>
        <Footer/>
    </div>
  )
}

export default Home
