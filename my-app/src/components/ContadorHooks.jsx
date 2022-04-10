import React, { useState, useEffect } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);

  const restar = () => setContador(contador - 1);

  ContadorHooks.defaultProps = {
    titulo: "Clicks",
  };

  return (
    <>
      <h2>useState - Contador Hooks</h2>
      <h3>Esto es un contador de {props.titulo}</h3>
      <h3>El contador del componente es {contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </>
  );
}
