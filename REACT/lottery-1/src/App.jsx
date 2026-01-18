import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  let winCondition = (array) => {
    return sum(array) === 15;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition}></Lottery>
    </>
  );
}

export default App;
