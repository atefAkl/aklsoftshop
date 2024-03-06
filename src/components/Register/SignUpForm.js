import  Button  from '../Reusable-Components/Button.js'
import React, { useState } from 'react'
import firebase from "../../firebaseConfig.js";
import { toast } from 'react-toastify';
import { useAuthContext } from '../../Context/AuthContextProvider.js';
function SignUpForm() {
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("");
    const {CreateUser,Username,setUserName} = useAuthContext();

    const success = (msg) => toast.success(msg, {
        position: "top-center"
      });
      const fail = (err) => toast.error(`${err}`, {
        position: "top-center"
      });

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await CreateUser(Email,Password)
                success("Account Created Successfully !");
        }
        catch(err){
            fail(err.message.slice(9));
            console.log(err)
        }
    }
   
  return (
    <div>
        <h5>Sign Up</h5>
        <form>
                <label>Username</label>
                <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='Enter Your Username' value={Username} />
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter Your Email' value={Email}/>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='it should be at least 6 character' value={Password}/>
                <div className='text-center'>
                <Button onClick={handleSubmit} type="primaryy">Register</Button>
                </div>
               
        </form>
    </div>

  )
}

export default SignUpForm
