import TicketNum from "./ticketnum.jsx";
 import "./ticket.css"
  export default function Ticket({ticket}){
     return( <div className="ticket"> 
     <p >Ticket :</p> <br />
     {ticket.map( (num,idx) => { return( <TicketNum num={num} key={idx} />) })}
      </div> ); }