import React from 'react'
import { useShopContext } from '../Context/ShopContextProvider'

function CartItem({lap}) {
    const {cartItems,addToCart,removeFromCart} = useShopContext();
    const LapTotalPrice = Math.round(cartItems[lap.id] * lap.price);
  return (
    <div className='cartItem row mb-4 align-items-center px-1'>
    <div className='col-6 d-flex fColum'>
        <div className='wrapImage'>
            <img src={lap.image}/>
        </div>
        <div className='details'>
            <p className='mb-0'>{lap.brand}</p>
            <p>{lap.model}</p>
        </div>
    </div>

    <div className='col-3'>
            <p>{LapTotalPrice}$</p>
    </div>
    <div className='col-3 LColum'>
       <button onClick={()=>{removeFromCart(lap.id)}}>&larr;</button>
       <span>{cartItems[lap.id]}</span>
       <button onClick={()=>addToCart(lap.id)}>&rarr;</button>
    </div>


    </div>
  )
}

export default CartItem
