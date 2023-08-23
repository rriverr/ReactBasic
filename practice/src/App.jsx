import React from "react";

import Product from "./Product";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const products = [
    {
      title: "Product 1",
      price: 10,
      desc: "First Product",
    },
    {
      title: "Product 2",
      price: 20,
      desc: "Second Product",
    },
  ];
  return (
    <div>
      <h1>My Demo Shop</h1>
      {/* <Product name="Product 1" price="10" desc="First Product"/>
      <Product name="Product 2" price="20" desc="Second Product"/> */}
      <Product
        name={products[0].title}
        price={products[0].price}
        desc={products[0].desc}
      />
      <Product
        name={products[1].title}
        price={products[1].price}
        desc={products[1].desc}
      />
    </div>
  );
}
