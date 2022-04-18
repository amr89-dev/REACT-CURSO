import React from "react";

const CartItem = ({ data, delFromCart }) => {
  const { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h4>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h4>
      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
