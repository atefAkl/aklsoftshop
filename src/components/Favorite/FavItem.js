import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useShopContext } from '../../Context/ShopContextProvider';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'react-toastify';
function FavItem({item}) {
    const {removeFromFav,addToCart,cartItems} = useShopContext();
    const itemAmount = cartItems[item.itemId];
    
    const notifySuc = (msg) => toast.success(msg, {
      position: "top-center"
    });
    function handleAddToCart(id,model){
        addToCart(id);
        notifySuc(`You have added ${model} to Cart`);
    }
  return (
    <li className='fav-item col-12 col-md-6 col-lg-4'>
    <button onClick={()=>removeFromFav(item.itemId)} className='DelBtn'><CloseOutlinedIcon/></button>
    <button className='addBtn' onClick={()=>handleAddToCart(item.itemId,item.model)}>{itemAmount > 0 ?<ShoppingCartIcon/> :<ShoppingCartOutlinedIcon/>  }</button>
        <div className='favItemImage'>
        <img width="100px" src={item.img}/>
    </div>
    <div className='details'>
        <ul>
            <li>Brand : {item.brand} </li>
            <li>Model : {item.model}</li>
            <li>Processor: {item.processor}</li>
            <li>RAM : {item.ram}</li>
            <li>Storage: {item.storage}</li>
            <li>Graphic Card: {item.graphicCard}</li>
        </ul>
    </div>
        
    </li>
  )
}

export default FavItem
