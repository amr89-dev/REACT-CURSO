import React from "react";

const ProductItem = ({ data, addToCart }) => {
  const { id, product, price } = data;
  console.log(id, product, price);
  return (
    <div>
      <h4>{product}</h4>
      <h5>{price}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
