import { useState } from "react";
import { genNumber, sum } from "./helper";

export default function () {
  let [ticket, setTicket] = useState(() => genNumber(3));
  let isWinner = sum(ticket) == 15;
  let genTicket = () => setTicket(genNumber(3));
  return (
    <div>
      <h1>Lottery Game</h1>
      {isWinner ? (
        <h2>Congratulation You Won!</h2>
      ) : (
        <h2>Better Luck Next Time</h2>
      )}
      <h3
        style={{
          padding: "10px",
          width: "400px",
          height: "40px",
          border: "2px solid  blue",
          borderRadius: "10px",
        }}
      >
        Lottery Ticket = {ticket}
      </h3>
      <button onClick={genTicket}>New Ticket</button>
    </div>
  );
}
