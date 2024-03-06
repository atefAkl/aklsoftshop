import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from './pages/AppLayout';
import Favorite from './pages/Favorite';
import React from 'react';
import Loader from './components/Loader';
import { ShopContextProvider } from './Context/ShopContextProvider';
import Register from './pages/Register';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { AuthContextProvider } from './Context/AuthContextProvider';
const LazyHome = React.lazy(()=> import("./pages/Home"))


function App(){
  return (
    <ShopContextProvider>
    <AuthContextProvider>
    <HashRouter>
      <Routes>
         <Route path='/' element={<React.Suspense fallback={<Loader/>}><LazyHome/></React.Suspense>}/>
         <Route path='/app' element={<AppLayout/>}/>
         <Route path='/favorite' element={<Favorite/>}/>
         <Route path='/register' element={<Register/>}>
         <Route index element={<Navigate replace to={'signUp'}/>}/>
         <Route index path='signUp' element={<SignUpForm/>}/>
         <Route path='login' element={<LoginForm/>}/>
         </Route>
         <Route path='*' element={<h1 className='text-center mt-5'>Page Not Found 😫</h1>}/>
      </Routes>
    </HashRouter>
    </AuthContextProvider>
    </ShopContextProvider>
  );

  }
export default App;
