import  Button  from '../Reusable-Components/Button.js'
import React, { useState } from 'react'
import firebase from "../../firebaseConfig.js";
import { toast } from 'react-toastify';
import { useAuthContext } from '../../Context/AuthContextProvider.js';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("");
    const {Login} = useAuthContext();
    const navigate = useNavigate();
    const fail = (err) => toast.error(`${err}`, {
        position: "top-center"
      });
    async function handleSubmit(e){
        e.preventDefault();
        try{
           await Login(Email,Password);
            navigate("/");
        }
        catch(err){
            fail("invalid Login make sure your email and password are correct!");
        }
    }
  return (
    <div>
    <h5>Login</h5>
    <form>
            <label>Email</label>
            <input onChange={(e)=> setEmail(e.target.value)} type='text' placeholder='Enter Email' value={Email} />
            <label>Password</label>
            <input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password' value={Password} />
            <div className='text-center p-5'>
            <Button onClick={handleSubmit} type="primaryy">Login</Button>
            </div>
           
    </form>
    </div>
  )
}

export default LoginForm
