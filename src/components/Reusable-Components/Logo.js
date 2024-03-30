import React from "react";
import logo from "../../assets/logo.png";
function Logo() {
  return (
    <div className="logo">
      <img
        src={logo}
        width="110px"
        alt="logo"
        style={{ mixBlendMode: "plus-lighter" }}
      />
    </div>
  );
}

export default Logo;
