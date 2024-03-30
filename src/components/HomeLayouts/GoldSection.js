import React from "react";
import welcomeImg from "../../assets/wide-bg-image.jpg";
import "./GoldSection.css";
function GoldSection() {
  return (
    <div
      className="GoldContainer"
      style={{ backgroundImage: `url(${welcomeImg})` }}
    >
      <div className="overlay">
        <div className="details text-center text-md-start ">
          <h2 className="text-uppercase">AQL-SOFT Shop</h2>
          <div>
            Welcome to <b>AQL-SOFT SHOP</b>, your one-stop shop for the latest
            and greatest laptops. We offer a wide variety of laptops to choose
            from, so you're sure to find the perfect one for your needs.
            <h4>Our laptops are:</h4>
            <dl>
              <dt>State-of-the-art: </dt>
              <dd>
                We only carry the latest models from top brands like DELL,
                LINOVO, HP, APPLE and more.
              </dd>
            </dl>
            <dl>
              <dt>Affordable: </dt>
              <dd>We offer a variety of laptops to fit every budget.</dd>
            </dl>
            <dl>
              <dt>Customized: </dt>
              <dd>We can customize your laptop to meet your specific needs.</dd>
            </dl>
            <h4>We also Offering:</h4>
            <ul>
              <li>Free shipping on orders over 3000$ </li>
              <li>A 1-year warranty on all products</li>
              <li>24/7 customer support</li>
            </ul>
            Navigate to <b>AQL-SOFT SHOP</b> today and find the perfect laptop
            for you!
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldSection;
