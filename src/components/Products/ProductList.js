import React from "react";
import { LAPTOPS } from "../../data/data";
import Product from "./Product";
import "./Products.css";
import { useShopContext } from "../../Context/ShopContextProvider";
function ProductList({ showSideBar }) {
  const { Brand, Processor, Storage, Ram } = useShopContext();
  function handleFilter() {
    if (!Brand && !Processor && !Ram && !Storage) {
      return LAPTOPS;
    }
    return LAPTOPS.filter(
      (lap) =>
        lap.brand === Brand ||
        lap.ram === Ram ||
        lap.processor === Processor ||
        lap.storage === Storage
    );
  }
  return (
    <div className={`Products-side ${showSideBar ? "" : "move"} `}>
      <h2 className="mb-3 p-2">Recomended Laptops</h2>
      <ul className="Laptops row">
        {handleFilter().map((lap) => (
          <Product key={lap.id} lap={lap} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
