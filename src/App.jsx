import { useState,useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import First from './components/first'
import TextBox from './components/TextBox'
import Counter from './components/Counter'
import Clock from './components/clock'
import Click from './components/Click'
function App() {
  //  const ref = useRef(null);
   
  //    function handleRef() {
  //    alert(ref.current.value)
  //     }  

return(
 <>
 {/* <First/> */}
 {/* <TextBox referent ={ref}
 /> */}
  {/* <Counter/> */}
      {/* <button onClick={handleRef}>
    Show value      </button> */}
    {/* <Clock/> */}
    <Click/>
 </>
)
}

export default App
