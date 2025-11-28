
import Lotery from "./lotery.jsx"
import {Sum} from "./genrate.js"

function App() {

  function change(ticket) {
    return Sum(ticket) === 15;
  }

  return (
    <>
      <Lotery n={3} winingsum={change} />
    </>
  );
}

export default App;
