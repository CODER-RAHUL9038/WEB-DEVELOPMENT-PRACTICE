import "./Ticket.css";
import TicketNumber from "./TicketNumber";
export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h3>Ticket</h3>
      {ticket.map((el, idx) => (
        <TicketNumber num={el} key={idx}></TicketNumber>
      ))}
    </div>
  );
}
