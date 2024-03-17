import React from 'react'
import "./Products.css";
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { LAPTOPS } from '../../data/data';

function ProductDetails() {
  const {productId} = useParams();
const lap  = LAPTOPS.filter((lap)=>lap.id == productId);
  return (
    <div className='product-details'>

      <ul className='product-nav'>
          <li><NavLink to='overview'>overview</NavLink></li>
          <li><NavLink to='specifications'>specifications</NavLink></li>
          <li><NavLink to='reviews'>reviews</NavLink></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default ProductDetails
