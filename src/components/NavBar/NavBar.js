import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Reusable-Components/Logo';
import "./NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { useShopContext } from '../../Context/ShopContextProvider';
import DisplayUser from '../User/DisplayUser';
import { useAuthContext } from '../../Context/AuthContextProvider';
function NavBar() {
  const {User} = useAuthContext();
  const {handleOpen,getTotalAmount,getTotalFavs} = useShopContext();
  const TotalItems = getTotalAmount();
  const TotalFavs = getTotalFavs();
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <button className="navbar-toggler c-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="text-white"><MenuIcon/></span>
      </button>
      <Link className="navbar-brand" to="/"><Logo/></Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <form className="d-none d-lg-flex m-auto">
          <input className="" type="text" placeholder="Search" aria-label="Search"/>
          <button className="" type="submit"><SearchIcon/></button>
        </form>
        
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item" title="home">
            <NavLink className="nav-link text-center" aria-current="page" to={"/"}><HomeIcon/> <span className='d-block  d-md-none'>home</span></NavLink>
          </li>
          <li onClick={()=>handleOpen()} role='button' className="nav-item" title='cart'>
            {User !== null ? <span className='showCount'>{TotalItems}</span> : null}
            <a className="nav-link text-center"><ShoppingCartIcon/><span className='d-block d-md-none'>cart</span></a>
          </li>
          <li className="nav-item" title='register'>
            <NavLink className="nav-link text-center" to="/register" ><PersonIcon/><span className='d-block d-md-none'>register</span></NavLink>
          </li>
          <li className="nav-item" title='favorites'>
          {User !== null ? <span className='showCount'>{TotalFavs}</span> : null}
          <NavLink className="nav-link text-center" to="/favorite" ><FavoriteIcon/><span className='d-block d-md-none'>favorite</span></NavLink>
        </li>
        </ul>
        <DisplayUser/>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
