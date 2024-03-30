import React from "react";
import { useAuthContext } from "../../Context/AuthContextProvider.js";
import LogoutIcon from "@mui/icons-material/Logout";
import "./DisplayUser.css";
import Button from "../Reusable-Components/Button.js";
import PersonIcon from "@mui/icons-material/Person";

function DisplayUser() {
  const { User, logout } = useAuthContext();
  function handleLogOut() {
    logout();
    window.localStorage.clear();
    window.location.reload();
  }
  if (User === null) return null;
  return (
    <>
      <PersonIcon />
      {User.email.slice(0, User.email.indexOf("@"))}
      <Button onClick={() => handleLogOut()} type="logout">
        <LogoutIcon />
      </Button>
    </>
  );
}

export default DisplayUser;
