import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  function IncreaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count = {count} </h2>
      <button onClick={IncreaseCount}>Increase Count</button>
    </div>
  );
}
