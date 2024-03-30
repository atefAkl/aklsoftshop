import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./TopTape.css";

function TopTape() {
  return (
    <div className="TopTap">
      <div style={{ width: "90%", margin: "auto" }}>
        <div className="right">
          <div>
            <LocalPhoneIcon /> Phone: 009667660005
            <AlternateEmailIcon /> Email: sales@aklsoft.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTape;
