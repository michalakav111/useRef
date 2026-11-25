import { useState } from "react"
import { useRef } from "react";

function Clock() {

  const [seconds, setSeconds] = useState(0);
  const intervalId = useRef(null);

  function startTimer() {
    if (intervalId.current !== null) return;

    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    intervalId.current=id;
  }

  function stopTimer() {
    clearInterval(intervalId.current);
    intervalId.current=null;
  }

return(
    <>
 

   <div>
      <h2>Seconds: {seconds}</h2>

     
    </div>
    <div>
      <p>the clock</p>
     <button onClick={startTimer}>Start</button>

      <button onClick={stopTimer}>Stop</button>
</div>
 </>
)
}

export default Clock
