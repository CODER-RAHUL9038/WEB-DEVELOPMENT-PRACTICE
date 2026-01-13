import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, black: 0 });
  let [arr, setArr] = useState([]);

  function blueMoves() {
    setMoves((prevMoves) => ({ ...prevMoves, blue: prevMoves.blue + 1 }));
    setArr((prevArr) => [...prevArr, ", Item inserted in array"]);
  }

  function greenMoves() {
    setMoves((prevMoves) => ({ ...prevMoves, green: prevMoves.green + 1 }));
  }
  function redMoves() {
    setMoves((prevMoves) => ({ ...prevMoves, red: prevMoves.red + 1 }));
  }
  function blackMoves() {
    setMoves((prevMoves) => ({ ...prevMoves, black: prevMoves.black + 1 }));
  }

  return (
    <div>
      <h1>Game Begins</h1>

      <h2>Array = {arr}</h2>
      <div className="ludo">
        <p>Blue moves = {moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={blueMoves}>
          +1
        </button>
        <p>Green moves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={greenMoves}>
          +1{" "}
        </button>
        <p>Red moves = {moves.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={redMoves}>
          +1
        </button>
        <p>Black moves = {moves.black} </p>
        <button style={{ backgroundColor: "black" }} onClick={blackMoves}>
          +1
        </button>
      </div>
    </div>
  );
}
