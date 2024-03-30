import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SocialIcons } from "../../data/data";

//Icons

const About = () => {
  return (
    <>
      <h4>More About AKLSOFT Shop</h4>
      <p>
        Welcome to our AKLSOFT laptop shop, where cutting-edge technology meets
        unbeatable prices. With a wide selection of top brands and models.
      </p>
      <div className="icons justify-content-center justify-content-md-start">
        {SocialIcons?.map((ico) => (
          <Link className="navbar-brand" to={ico.link} target="_blank">
            {ico.icon}
          </Link>
        ))}
      </div>
    </>
  );
};

export default About;
