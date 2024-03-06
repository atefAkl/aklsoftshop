import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from "../components/Footer/Footer.js";
import FavItems from '../components/Favorite/FavItems.js';
import Cart from '../components/Cart/Cart.js';
import { useShopContext } from '../Context/ShopContextProvider.js';
import TopTape from '../components/HomeLayouts/TopTape.js';

function Favorite() {
  const {isOpened} = useShopContext();
  return (
    <div className='FavoriteP' style={{marginTop:"-80px"}}>
      <TopTape/>
      <NavBar/>
      {isOpened? <Cart/> : null}  
      <FavItems/>
      <Footer/>
    </div>
  )
}

export default Favorite
