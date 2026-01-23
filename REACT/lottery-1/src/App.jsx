import "./App.css";
import Lottery from "./Lottery";
import CommentsForm from "./CommentsForm";
import { sum } from "./helper";
import Form from "./Form";
import Comment from "./Comment";
import Counter from "./Counter";
import Joker from "./Joker";
function App() {
  let winCondition = (array) => {
    return sum(array) === 15;
  };
  return (
    <>
    <Joker></Joker>
    {/* <Counter></Counter> */}
      {/* <Comment></Comment> */}
      {/* <Form /> */}
      {/* <Lottery n={3} winCondition={winCondition}></Lottery> */}
    </>
  );
}

export default App;
