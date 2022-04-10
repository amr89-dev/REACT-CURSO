import { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  //const sumar = (e) => setContador(contador + 1);
  const sumar = useCallback(() => setContador(contador + 1), [contador]);

  //const restar = (e) => setContador(contador - 1);
  const restar = useCallback((e) => setContador(contador - 1), [contador]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <input type="text" onChange={handleInput} value={input} />
      <h3>{contador}</h3>
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
