import React from "react";
import { useAuthContext } from "../../Context/AuthContextProvider";
const Profile = () => {
  const { User } = useAuthContext();
  return (
    <div className="container">
      Hello from profile
      {/* <h1>{User.email.slice(0, User.email.indexOf("@"))}</h1> */}
    </div>
  );
};

export default Profile;
