import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Register.css';
import { ToastContainer } from 'react-toastify';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import  Button  from '../components/Reusable-Components/Button.js';
function Register() {
  const navigate = useNavigate();
  return (
    <div className='register'>
      <Button className="backBtn" onClick={()=>navigate("/")} type="primaryy"><KeyboardBackspaceIcon/><span>BACK</span></Button>
        <div className='wrapper'>
            <ul className='registerNav'>
               <li><NavLink to='signUp'>Sing Up</NavLink></li>
               <li><NavLink to='login'>Login</NavLink></li>
            </ul>
            <Outlet/>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Register
