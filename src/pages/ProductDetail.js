import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt={product.title} />
      <p>Price: ${product.price}</p>
    </div>
  );
}
