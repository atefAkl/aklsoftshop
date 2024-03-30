import React from "react";
import NavBar from "../components/NavBar/NavBar.js";
import Slide from "../components/Slide/Slide.js";
import BrandSlide from "../components/HomeLayouts/BrandSlide.js";
import Footer from "../components/Footer/Footer.js";
import AdvantagesSec from "../components/HomeLayouts/AdvantagesSec.js";
import TopProducts from "../components/HomeLayouts/TopProducts.js";
import Cart from "../components/Cart/Cart.js";
import { ToastContainer } from "react-toastify";
import { useShopContext } from "../Context/ShopContextProvider";
import GoldSection from "../components/HomeLayouts/GoldSection.js";
import TopTape from "../components/HomeLayouts/TopTape.js";
import LaptopDetails from "../components/Products/LaptopDetails.js";
import Testimonials from "../components/HomeLayouts/Testimonials.js";
import { useAuthContext } from "../Context/AuthContextProvider";
function Home() {
  const { User, logout } = useAuthContext();
  const { isOpened, showDetails } = useShopContext();
  function handleLogOut() {
    logout();
    window.localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="home" style={{ overflow: "hidden" }}>
      <TopTape />
      <NavBar user={User} out={handleLogOut} />
      <div id="Toast">
        <ToastContainer />
      </div>
      <Slide />
      {isOpened ? <Cart /> : null}
      <TopProducts />
      {showDetails ? <LaptopDetails /> : null}
      <GoldSection />
      <AdvantagesSec />
      <BrandSlide />
      <Testimonials />
      <Footer user={User} functions={{ logout: handleLogOut }} />
    </div>
  );
}

export default Home;
