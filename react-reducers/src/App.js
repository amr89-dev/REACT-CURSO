import Counter from "./components/Counter";
import CounterMejorado from "./components/CounterMejorado";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h2>UseReducer</h2>
      <hr />
      <ShoppingCart />
      <hr />
      <CounterMejorado />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
