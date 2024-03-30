import React from "react";
import { Link, NavLink } from "react-router-dom";
import FooterLink from "./FooterLink";
import { useAuthContext } from "../../Context/AuthContextProvider.js";

const Links = () => {
  const { User, logout } = useAuthContext();
  return (
    <>
      <ul className="footer-link-group">
        <h5>Website</h5>
        <li>
          <Link className="navbar-brand" to="/view/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" to="/view/products">
            Electronics
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" to="/view/products">
            Accessories
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" to="/view/products">
            Branches
          </Link>
        </li>
        <li>
          <Link className="navbar-brand" to="/view/products">
            Site Map
          </Link>
        </li>
      </ul>

      {User ? (
        <ul>
          <h5>Account</h5>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Orders
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Bills
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Favoutites
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <h5>Account</h5>
          <li>
            <Link className="navbar-brand" to="/register/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/register/signup">
              Register
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Affiliate
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/appLayout/profile">
              Join team
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Links;
