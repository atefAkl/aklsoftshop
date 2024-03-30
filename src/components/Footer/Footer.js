import React from "react";
import { Link, NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";
import Links from "./Links";

import "./Footer.css";
import About from "./About.js";
function Footer() {
  return (
    <div className="footer text-center text-md-start">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <About />
        </div>
        <div className="links col-12 col-md-6 col-lg-4 mb-3">
          <Links />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Newsletter />
        </div>
      </div>
      <div className="text-center p-3 mt-3">
        <p>
          Copyright &copy; 2024-2030 | AKLSOFT<sup>TM</sup> | All Rights
          Reserved AKLSOFT
        </p>
      </div>
    </div>
  );
}

export default Footer;
