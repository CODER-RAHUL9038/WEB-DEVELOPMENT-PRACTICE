import { useState } from "react";
import { genNumber } from "./helper";
import Ticket from "./Ticket.jsx";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(() => genNumber(n));

  let isWinner = winCondition(ticket);
  let genTicket = () => setTicket(genNumber(n));

  return (
    <div className="lottery-container">
      <h1>🎰 Lottery Game 🎰</h1>

      {isWinner ? (
        <h2 className="win">🎉 Congratulations! You Won!</h2>
      ) : (
        <h2 className="lose">😞 Better Luck Next Time</h2>
      )}

      <Ticket ticket={ticket} />

      <button onClick={genTicket}>🎲 New Ticket</button>
    </div>
  );
}
