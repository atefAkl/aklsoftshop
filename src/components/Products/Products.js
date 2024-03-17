import React, { useState } from 'react'
import "./Products.css";
import FilterSidebar from './FilterSidebar';
import ProductList from './ProductList';
import MenuIcon from '@mui/icons-material/Menu';
function Products() {
    const [showSideBar,setShowSideBar] = useState(true)
  return (
    <div className='products-filter'>
    <button onClick={()=>setShowSideBar(!showSideBar)} className='SideBarBtn'><MenuIcon/> Filter</button>
     {showSideBar?<FilterSidebar/>:null} 
      <ProductList showSideBar={showSideBar}/>
    </div>
  )
}

export default Products
