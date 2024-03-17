import React from 'react'
import { useParams } from 'react-router-dom';
import { LAPTOPS } from '../../data/data';
import { useShopContext } from '../../Context/ShopContextProvider';

function ProductOverview() {
  const {cityName,country} = useShopContext();
  const {productId} = useParams();
  const [{id,brand,model,release_year,processor,ram,storage,display_size,resolution,graphics_card,weight,price,description,image,ratings,reviews}]  = LAPTOPS.filter((lap)=>lap.id == productId);
  return (
    <div className='container'>
    <div className='overview'>
      <div className='row'>
            <div className="col-12 col-md-6">
            <div className='img-wrap-product'>
            <img src={image} />
            </div>
            </div>
            <div className="col-12 col-md-6">
               <h4 className='mt-4'>{brand} {model} {processor} {ram} {storage}</h4>
               <h5 style={{color:"green",fontWeight:"bold"}}>{price}$</h5>
               <p>{description}</p>
               <p className='fw-bold'><span >Delivery to :</span> <span style={{color:"#0066be"}}>{cityName} {country}</span></p>
               <button style={{width:"100%", padding:"10px",fontWeight:"bold", backgroundColor:"#0066be", color:"#fff"}}>Buy Now</button>
            </div>
      </div>
    </div>
    </div>
  )
}

export default ProductOverview
