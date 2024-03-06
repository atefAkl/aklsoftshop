import React from 'react'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer.js";
import FavItems from '../components/FavItems.js';
import Cart from '../components/Cart.js';
import { useShopContext } from '../Context/ShopContextProvider.js';
import TopTape from '../components/TopTape.js';

// import PaginationBtns from '../components/PaginationBtns.js';
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
