import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";
import Form from "./Form";

function App() {
  let winCondition = (array) => {
    return sum(array) === 15;
  };
  return (
    <>
      <Form />
      {/* <Lottery n={3} winCondition={winCondition}></Lottery> */}
    </>
  );
}

export default App;
