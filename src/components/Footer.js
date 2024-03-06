import React from 'react'
import { SocialIcons } from '../data/data'
import PaymentImg from '../assets/payments.png'
import  Button  from './Button.js';
import "./Footer.css"; 
function Footer() {
  return (
    <div className='footer text-center text-md-start'> 
          <div className='row'>
                <div className='col-12 col-md-6 col-lg-3 mb-3'>
                        <h4>More About Our Shop</h4>
                        <p>Welcome to our laptop shop, where cutting-edge technology meets unbeatable prices.
                         With a wide selection of top brands and models.
                        </p>
                      <ul className='icons justify-content-center justify-content-md-start'>
                        {SocialIcons?.map((ico) =>
                         <li key={ico.name} style={{color:`${ico.color}`}}>{<ico.icon/>}</li>) 
                        }
                      </ul>
                        
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-3'>
                        <h5>Shop</h5>
                      <ul>
                      <li><a>Laptops</a></li>
                      <li><a>Electronics</a></li>
                      <li><a>Accessories</a></li>
                      <li><a>components</a></li>
                      <li><a>Other</a></li>
                      </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-2'>
                <h5>Your Account</h5>
                <ul>
                <li><a>Profile</a></li>
                <li><a>Orders</a></li>
                <li><a>Account Details</a></li>
                <li><a>Payment Options</a></li>
                <li><a>Other</a></li>
                </ul> 
                </div>
                <div className='col-12 col-md-6 col-lg-3 text-center'>
                        <h5>Subscribe to our newsletter.</h5>
                        <p>stay connected with our shop</p>
                        <div className='subscription mb-3 justify-content-center justify-content-md-start'>
                        <input placeholder='Enter Your Email' type='text'/>
                        <Button type="primaryy">Subscribe</Button>
                </div>
                     <div><img src={PaymentImg}/></div>
                </div>
                
          </div>
          <div className="text-center p-3 mt-3"><p>&copy;Copyright 2024 | Laptops shopping | All Rights Reserved | Made with 💚 By Abdelrahman Mohamed</p></div>
    </div>
  )
}

export default Footer
