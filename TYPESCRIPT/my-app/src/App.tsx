import "./App.css";
import Type from "./components/Code";

import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <>
      <Type name="Headphones" price={250} isSpecial={true}></Type>
      <div>
        <Counter />
      </div>
      <div>
        <OrderForm />
      </div>
    </>
  );
}

export default App;
