import { useRef, useState, useEffect } from "react";

function Counter() {
   
 const [seconds, setSeconds] = useState(0);
  const intervalId = useRef(null);

  function startTimer() {
    if (intervalId.current !== null) return;

    intervalId.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  return (
    <div>
      <h2>Seconds: {seconds}</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Counter
