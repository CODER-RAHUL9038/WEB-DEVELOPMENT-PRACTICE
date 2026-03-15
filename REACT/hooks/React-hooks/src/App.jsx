import { useReducer, useState } from "react";

import "./App.css";

function reducer(state, action) {
  console.log("state", state);
  console.log("action", action);

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
      <button
        className="counter"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Count is {state}
      </button>
    </>
  );
}

export default App;
