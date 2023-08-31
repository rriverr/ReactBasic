import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const param = useParams();

  return (
    <React.Fragment>
      <h1>Product Details!</h1>
      <p>{param.productId}</p>
    </React.Fragment>
  );
};

export default ProductDetailPage;
