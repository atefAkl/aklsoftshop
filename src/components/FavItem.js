import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useShopContext } from '../Context/ShopContextProvider';
function FavItem({item}) {
    const {removeFromFav} = useShopContext();
  return (
    <li className='fav-item col-12 col-md-6 col-lg-4'>
    <button onClick={()=>removeFromFav(item.itemId)} className='DelBtn'><CloseOutlinedIcon/></button>
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
