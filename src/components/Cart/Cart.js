import React from 'react'
import "./Cart.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useShopContext } from '../../Context/ShopContextProvider';
import emptyCart from "../../assets/emptyCart.png";
import { LAPTOPS } from '../../data/data';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
function Cart() {
    const {handleOpen,cartItems,getTotalPrice,getDefaultCart,setCartItems} = useShopContext();
    const TotalPrice = getTotalPrice();

    const notifySuc = (msg) => toast.success(msg, {
      position: "top-center"
    });
    const notifyErr = (msg) => toast.error(msg, {
      position: "top-center"
    });

    function handleCheckOut(){
      if(TotalPrice === 0 ){
        notifyErr(`Your Cart is empty!`)
      }
      else{
        notifySuc(`Payment completed successfully! You Purchased ${TotalPrice}$`)
        setCartItems(getDefaultCart());
      }
    }
    function handleClear(){
      setCartItems(getDefaultCart());
    }
  return (
    <div className='cart'
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500">

    {TotalPrice!==0 ? <button onClick={()=>handleClear()} className='clearBtn'>Clear Cart</button> : null}
    <button className='closeBtn' onClick={()=>handleOpen()}><CloseOutlinedIcon/></button>
        <h3 className='p-1 mb-5'>Cart</h3>

        <div className='cartItems'>
            {LAPTOPS.map((lap)=>{
                if(cartItems[lap.id] !== 0){
                  return <CartItem key={lap.id} lap={lap}/>
                }
              })}
        </div>
        {TotalPrice == 0? <div className='d-flex align-content-center justify-content-center'><img src={emptyCart}/></div> : null}
        <div className='cartFooter'>
            <span>{TotalPrice===0?"Total Price" : TotalPrice} $</span>
            <button onClick={handleCheckOut}>Checkout</button>
        </div>
    </div>
  )
}

export default Cart
