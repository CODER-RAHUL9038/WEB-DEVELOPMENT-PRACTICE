import { useState } from "react";
import "./Lottery.css";
export default function Lottery() {
  let getNumber = () => {
    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    let n3 = Math.floor(Math.random() * 10);
    let sum = n1 + n2 + n3;
    return {
      number: [n1, n2, n3],
      sum,
    };
  };

  let [ticket, setTicket] = useState(getNumber);

  let newTicket = () => setTicket(getNumber());

  return (
    <div>
      <h1>🎰 Lottery 🎰</h1>
      {ticket.sum==15?<h2>Congratulations🎉 You won!</h2>:<h2>Try again ❌ </h2>}
      <h3>Lottery Ticket = {ticket.number}</h3>
      <button onClick={newTicket}>Get Ticket</button>
    </div>
  );
}
