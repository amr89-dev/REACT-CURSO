import Counter from "./components/Counter";
import CounterMejorado from "./components/CounterMejorado";
import ShoppingCar from "./components/ShoppingCar";

function App() {
  return (
    <div>
      <h2>UseReducer</h2>
      <hr />
      <ShoppingCar />
      <hr />
      <CounterMejorado />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
