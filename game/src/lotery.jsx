import { useState } from "react"; 
import"./lotery.css"
 import {Genrate,Sum} from"./genrate";
  import Ticket from "./ticket.jsx";
 export default function Lotery({n,winingsum}){ 
    const [ticket,setticket]=useState(Genrate(n)); 
    const [attempt,setattempt]=useState(0)
    const[mes,setmes]=useState(" ")
    const[over,setover]=useState(false)
const reset=()=>{
    setover(false)
    setticket(Genrate(n));
    setattempt(0);
    setmes(" ");
}
     let buyticket=()=>{
        if(over) return
         let newticket=(Genrate(n)) 
         setticket(newticket)
         let newattempt=attempt+1;
        setattempt(newattempt)
        if(winingsum(newticket)){
            setmes("congradulation !you win")
        setover(true)
        } else if(newattempt >=6){
            setmes("sorry ,you are fail")
      setover(true)

         }
        
    };
      return( 
      <div className="game"> 
      <h1>Lotery Game</h1>
    <Ticket ticket={ticket} /> 
       <button onClick={buyticket} disabled={over} > Buy New Ticket</button> 
       <button  onClick={reset}  >Restart</button>
       <h3>{mes}</h3> 
       <p className="attempt">Attempts :{attempt}</p>
       </div>
    
    ) 
       }