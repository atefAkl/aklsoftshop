import React from 'react'
import { useShopContext } from '../../Context/ShopContextProvider'
import FavItem from './FavItem';
import "./FavItems.css";
import MainHeading from '../Reusable-Components/MainHeading';

function FavItems() {
    const {FavItems} = useShopContext();
  return (
    <div className='FavContainer container'>
    <MainHeading>My Favorite</MainHeading>
      <ul className='FavList row'> 
        {FavItems.map((item) => <FavItem key={item.itemId} item={item}/>)}
      </ul>
      {FavItems.length ==0 ? <h1 className='text-center'>No Items In Your Favorite List</h1>: null}
    </div>
  )
}

export default FavItems
