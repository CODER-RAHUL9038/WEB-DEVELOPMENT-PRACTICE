import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState<number | null>(0);
  return (
    <div>
      <p>Cups Ordered : {count}</p>
      <button
        type="submit"
        onClick={() => setCount((prevCount) => (prevCount ?? 0) + 1)}
      >
        Order one more
      </button>
    </div>
  );
}
