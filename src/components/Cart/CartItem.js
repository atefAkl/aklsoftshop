import React from "react";
import { useShopContext } from "../../Context/ShopContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function CartItem({ lap }) {
  const { cartItems, addToCart, removeFromCart, deleteItemFromCart } =
    useShopContext();
  const LapTotalPrice = Math.round(cartItems[lap.id] * lap.price);
  return (
    <tr className="cartItem" key={lap.id}>
      <td className="imageWrapper">
        <img src={lap.image} alt="" width={50} />
      </td>
      <td className="laptopDetails">
        <h4>{lap.brand}</h4>
        <p>{lap.model}</p>
      </td>
      <td className="laptopPrice">
        <div className="controls">
          <span className="plus" onClick={() => addToCart(lap.id)}>
            <AddCircleIcon />
          </span>
          <span className="itemCount">{cartItems[lap.id]}</span>
          <span
            className="minus"
            onClick={() => {
              removeFromCart(lap.id);
            }}
          >
            <RemoveCircleIcon />
          </span>
          <span className="delItem" onClick={() => deleteItemFromCart(lap.id)}>
            <DeleteForeverIcon />
          </span>
        </div>
        <div className="price">{LapTotalPrice} $</div>
      </td>
    </tr>
  );
}

export default CartItem;
