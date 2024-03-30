import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import TopTape from '../components/HomeLayouts/TopTape'
import Cart from '../components/Cart/Cart';
import { useShopContext } from '../Context/ShopContextProvider';
import Footer from '../components/Footer/Footer';
// import "../components/Products/Products.css";
function AppLayout() {
  const {isOpened} = useShopContext();

  return (
    <div className='appLayout'>
    <TopTape/>
    <NavBar/>
    {isOpened? <Cart/> : null}
      <div className='appContainer'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout
