// /client/src/App.js

import React, { useState, useEffect } from "react";
import Product from "./Components/Product";

// SERVICES
import productService from "./services/productServices";

function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  });

  const HandleProducts = e => {
    if (products) {
      return <Product products={products}></Product>;
    } else {
      return <p>No data founded</p>;
    }
  };

  const getProducts = async () => {
    let res = await productService.getAll();
    setproducts(res);
  };
  return (
      <HandleProducts></HandleProducts>
  );
}

export default App;
