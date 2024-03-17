import React from 'react'
import { LAPTOPS } from '../../data/data';
import { useParams } from 'react-router-dom';
import "./Products.css";
function ProductSpecifications() {
  const {productId} = useParams();
  const [{id,brand,model,release_year,processor,ram,storage,display_size,resolution,graphics_card,weight,price,description,image,ratings,reviews}]  = LAPTOPS.filter((lap)=>lap.id == productId);
  return (
    <div className='container'>
    <div className='product-spec'>
      <table>
        <tr>
            <td>Brand</td> 
            <td>{brand}</td>
        </tr>
        <tr>
            <td>Model Name</td> 
            <td>{model}</td>
        </tr>
        <tr>
            <td>Release Year</td> 
            <td>{release_year}</td>
        </tr>
        <tr>
            <td>Processor</td> 
            <td>{processor}</td>
        </tr>
        <tr>
            <td>RAM</td> 
            <td>{ram}</td>
        </tr>
        <tr>
            <td>Storage</td> 
            <td>{storage}</td>
        </tr>
        <tr>
            <td>Display Size</td> 
            <td>{display_size}</td>
        </tr>
        <tr>
          <td>Resolution</td> 
          <td>{resolution}</td>
        </tr>
        <tr>
          <td>Graphic Card</td> 
          <td>{graphics_card}</td>
        </tr>
        
      </table>
    </div>
    </div>
  )
}

export default ProductSpecifications
