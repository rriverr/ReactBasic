import React from "react";

export default function Product({name, price, desc}) {
  return (
    <article className="product">
      <h2>{name}</h2>
      <p className="price">${price}</p>
      <p>{desc}</p>
    </article>
  );
}
