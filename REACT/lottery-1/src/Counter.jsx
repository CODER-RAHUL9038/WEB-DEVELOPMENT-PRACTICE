import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let IncCountx = () => setCountx((prevCount) => prevCount + 1);
  let IncCounty = () => setCounty((prevCount) => prevCount + 1);
  useEffect(function print() {
    console.log("This is a side effect of rendering");
  }, []);
  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>{countx}</h1>
      <button style={{ marginBottom: "2rem" }} onClick={IncCountx}>
        +1
      </button>
      <h1 style={{ marginBottom: "2rem" }}>{county}</h1>
      <button style={{ marginBottom: "2rem" }} onClick={IncCounty}>
        +1
      </button>
    </div>
  );
}
