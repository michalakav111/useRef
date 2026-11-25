import { useState } from "react";
import { useRef } from "react";
function Click(){
    const countClicks = useRef(0) 
    const [total,settotal]=useState(null)
    function hendeladd(){
        countClicks.current++;
    }
    function showtotal(){
        settotal(countClicks.current)
    }

    return(
        <>
        <button onClick={hendeladd}>Click Me</button>
                <button onClick={showtotal}> Show Total Clicks.</button>

      {total !== null && <h2>Total Clicks: {total}</h2>}

        </>
    )
}
export default Click