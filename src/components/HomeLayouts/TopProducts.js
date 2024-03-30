import React, { useState } from "react";
import LaptopsList from "../Products/LaptopsList.js";
import MainHeading from "../Reusable-Components/MainHeading.js";
import Button from "../Reusable-Components/Button.js";
function TopProducts() {
  const [counter, setCounter] = useState(6);
  function handleCounter() {
    if (counter <= 30) {
      setCounter((prev) => prev + 3);
    }
    console.log(counter);
  }
  return (
    <div className="topProducts container">
      <MainHeading>Our Products</MainHeading>
      <LaptopsList counter={counter} />
      <div className="text-center mt-4">
        <Button
          className="loadMore"
          onClick={() => handleCounter()}
          type="primaryy"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default TopProducts;
