import React, { useState } from 'react'
import './LaptopsList.css';

import {LAPTOPS} from '../../data/data.js';
import Laptop from './Laptop.js';

function LaptopsList({counter}) {
  const TopLaptops = LAPTOPS.slice(0,counter);
  return (
    <ul className='Laptops row'>
        {TopLaptops.map((lap)=>
          <Laptop key={lap.id} lap={lap}/>
          )}
    </ul>
  )
}

export default LaptopsList
