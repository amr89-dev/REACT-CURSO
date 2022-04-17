import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  counterReducer,
  counterInit,
  counterInitialState,
} from "../reducers/counterReducer";

const CounterMejorado = () => {
  const [state, dispatch] = useReducer(
    counterReducer,
    counterInitialState,
    counterInit
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Mejorado</h2>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>-5</button>
      <button onClick={reset}>0</button>

      <button onClick={sumar}>+</button>
      <button onClick={sumar5}>+5</button>
      <h3>{state.counter}</h3>
    </div>
  );
};

export default CounterMejorado;
