import React from "react";
import "./Cart.css";
import StartIcon from "@mui/icons-material/Start";
import { useShopContext } from "../../Context/ShopContextProvider";
import emptyCart from "../../assets/emptyCart.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LAPTOPS } from "../../data/data";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import PaymentIcon from "@mui/icons-material/Payment";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
function Cart() {
  const { handleOpen, cartItems, getTotalPrice, getDefaultCart, setCartItems } =
    useShopContext();
  const TotalPrice = getTotalPrice();

  const notifySuc = (msg) =>
    toast.success(msg, {
      position: "top-center",
    });
  const notifyErr = (msg) =>
    toast.error(msg, {
      position: "top-center",
    });

  function handleCheckOut() {
    if (TotalPrice === 0) {
      notifyErr(`Your Cart is empty!`);
    } else {
      notifySuc(`Payment completed successfully! You Purchased ${TotalPrice}$`);
      setCartItems(getDefaultCart());
    }
  }
  function handleClear() {
    setCartItems(getDefaultCart());
  }
  return (
    <div
      className="cart"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <div className="cartHeader">
        <h3 className="p-1 mb-5">Cart</h3>
        {TotalPrice !== 0 ? (
          <span onClick={() => handleClear()} className="clearBtn">
            <RemoveShoppingCartIcon /> Truncate
          </span>
        ) : null}
        <span className="closeBtn" onClick={() => handleOpen()}>
          <StartIcon fontSize="large" />
        </span>
      </div>
      <div className="cartItems">
        <table>
        {LAPTOPS.map((lap) => {
          if (cartItems[lap.id] !== 0) {
            return <CartItem key={lap.id} lap={lap} />;
          }
        })}
        </table>
        
      </div>
      <div className=" d-flex p-3 align-content-center justify-content-center">
        {TotalPrice == 0 ? (
          <img className="emptyCart" src={emptyCart} alt="" />
        ) : null}
      </div>
      <div className="cartFooter">
        <button className="totalPrice">
          {TotalPrice == 0 ? (
            <ProductionQuantityLimitsIcon />
          ) : (
            <AddShoppingCartIcon />
          )}
          Total Price: &nbsp; {TotalPrice} $
        </button>
        <button className="checkout" onClick={handleCheckOut}>
          {TotalPrice == 0 ? <CreditCardOffIcon /> : <PaymentIcon />}
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
