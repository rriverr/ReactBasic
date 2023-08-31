import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];

const ProductPage = () => {
  return (
    <React.Fragment>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((p) => {
          return (
            <li key={p.id}>
              <Link to={`/products/${p.id}`}>{p.title}</Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProductPage;
