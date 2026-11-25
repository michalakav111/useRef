import { useRef, useState } from "react"



function First() {
    // const [inputValue,setinputValue]=useState('')
const ref = useRef({ inputValue: "" });
    
// function handleClear(){
//    setinputValue('');
// }

 function handleClear() {
    inputRef.current.value = '';
  }
return(
    <div>
         <input
        type="text"
        value={inputValue}
        // onChange={(e) => setinputValue(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleClear}>
clear input
      </button>
      </div>
)
}

export default First
