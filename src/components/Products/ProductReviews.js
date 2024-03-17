import React from 'react'
import { LAPTOPS } from '../../data/data';
import { useParams } from 'react-router-dom';
import "./Products.css";
function ProductReviews() {
 
  const {productId} = useParams();
  const [{id,brand,model,release_year,processor,ram,storage,display_size,resolution,graphics_card,weight,price,description,image,ratings,reviews}]  = LAPTOPS.filter((lap)=>lap.id == productId);
  return (
    <div className='container'>
      <div className='reviews'>
          {reviews.map((rev) => 
            <div className='user-rev'>
                <h5>{rev.username}</h5>
                <p>{rev.comment}</p>
                <ul>
                  <li>Like</li>
                  <li>Dislike</li>
                  <li>Replay</li>
                </ul>
            </div>
            )}
      </div>
    </div>
  )
}

export default ProductReviews
