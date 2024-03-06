import React from 'react'
import { useAuthContext } from '../../Context/AuthContextProvider.js'
import "./DisplayUser.css";
import Button from '../Reusable-Components/Button.js';
function DisplayUser() {
    const {User,logout} = useAuthContext();
    function handleLogOut(){
        logout();
        window.localStorage.clear();
        window.location.reload();
    }
    if(User === null) return null;
  return (
        <div onClick={()=>handleLogOut()} className='text-center'>Welcome {User.email.slice(0,User.email.indexOf("@"))} <Button type="logout">Logout</Button></div>
  )
}

export default DisplayUser
