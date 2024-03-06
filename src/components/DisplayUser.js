import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContextProvider'
import { useNavigate } from 'react-router-dom';
import "./DisplayUser.css";
import Button from './Button.js';
function DisplayUser() {
    const {User,logout} = useAuthContext();
    const [isvisable,setIsvisable] = useState(false);
    const navigate = useNavigate();
    function handleLogOut(){
        logout();
        window.localStorage.clear();
        window.location.reload();
    }
    // const index = User.email.indexOf("@");
    // const userName =  User.email.slice(0,index);
    if(User === null) return null;
  return (
        <div onClick={()=>handleLogOut()} className='text-center'>Welcome {User.email.slice(0,User.email.indexOf("@"))} <Button type="logout">Logout</Button></div>
  )
}

export default DisplayUser
