import { useReducer } from "react";

const initialState = { counter: 0 };

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

const init = (initialState) => {
  return {
    counter: initialState.counter + 100,
  };
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { counter: state.counter + 1 };
    case TYPES.INCREMENT_5:
      return { counter: state.counter + action.payload };
    case TYPES.DECREMENT:
      return { counter: state.counter - 1 };
    case TYPES.DECREMENT_5:
      return { counter: state.counter - action.payload };
    case TYPES.RESET:
      //return { counter: (state.counter = 0) }; <-- Esta tambien funciona
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  //const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>-5</button>
      <button onClick={reset}>0</button>

      <button onClick={sumar}>+</button>
      <button onClick={sumar5}>+5</button>
      <h3>{state.counter}</h3>
    </div>
  );
};

export default Counter;
