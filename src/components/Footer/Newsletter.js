import React from "react";
import PaymentImg from "../../assets/payments.png";

const Newsletter = () => {
  return (
    <>
      <h5>Subscribe to our newsletter.</h5>
      <p>stay connected with our shop</p>
      <div className="subscription mb-3 justify-content-center justify-content-md-start">
        <input placeholder="Enter Your Email" type="text" />
        <button type="primary" className="btn-sm px-3">
          Subscribe
        </button>
      </div>
      <div className="paymentImage">
        <img src={PaymentImg} alt={PaymentImg} />
      </div>
    </>
  );
};

export default Newsletter;
