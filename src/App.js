import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from './pages/AppLayout';
import Favorite from './pages/Favorite';
import React from 'react';
import Loader from './components/Reusable-Components/Loader';
import { ShopContextProvider } from './Context/ShopContextProvider';
import Register from './pages/Register';
import LoginForm from './components/Register/LoginForm';
import SignUpForm from './components/Register/SignUpForm';
import { AuthContextProvider } from './Context/AuthContextProvider';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import ProductOverview from './components/Products/ProductOverview';
import ProductSpecifications from './components/Products/ProductSpecifications';
import ProductReviews from './components/Products/ProductReviews';
const LazyHome = React.lazy(()=> import("./pages/Home"))


function App(){
  return (
    <ShopContextProvider>
    <AuthContextProvider>
    <HashRouter>
      <Routes>
         <Route path='/' element={<React.Suspense fallback={<Loader/>}><LazyHome/></React.Suspense>}/>
          <Route path='/appLayout' element={<AppLayout/>}>
            <Route index path='products' element={<Products/>}/>
            <Route index element={<Navigate replace to={'Products'}/>}/>
            <Route path='Products/:productId' element={<ProductDetails/>}>
            <Route index element={<Navigate replace to={'overview'}/>}/>
                  <Route index path='overview' element={<ProductOverview/>}/>
                  <Route path="specifications" element={<ProductSpecifications/>}/>
                  <Route path='reviews' element={<ProductReviews/>}/>
            </Route>
          </Route>
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
