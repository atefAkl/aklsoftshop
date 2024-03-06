import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from '../firebaseConfig.js';
const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [User,setUser] = useState(null);
    const [Username,setUserName] = useState("")
    // Create User function
    function CreateUser(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function Login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth);
    }
    
    useEffect(()=>{
       const getUser = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
       })
       return ()=> {
        getUser();
       }
        
    },[])

  return (
    <AuthContext.Provider value={{CreateUser,Login,logout,User,Username,setUserName}}>
    {children}
    </AuthContext.Provider>
  )
}

function useAuthContext(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthContextProvider, useAuthContext }
