import React from 'react'
import NavBar from '../components/NavBar'
import Slide from "../components/Slide"
import BrandSlide from '../components/BrandSlide'
import Footer from '../components/Footer'
import AdvantagesSec from '../components/AdvantagesSec'
import TopProducts from '../components/TopProducts'
import Cart from '../components/Cart'
import { ToastContainer } from 'react-toastify';
import { useShopContext } from '../Context/ShopContextProvider'
import DisplayUser from '../components/DisplayUser'
import GoldSection from '../components/GoldSection'
import TopTape from '../components/TopTape'

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
