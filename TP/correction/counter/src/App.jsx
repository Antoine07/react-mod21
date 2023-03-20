import { useDispatch, useSelector } from "react-redux";
import { increment, counterAsync  } from "./store/counterSlice";

import './App.css'
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();
  const { number, parity } = useSelector( state => state );

  useEffect(() => {
    dispatch(counterAsync(10))
    console.log('ici')
  }, [])

  return (
    <div className="App">
      <div className="card">
        <p>{number}</p>
        <p>{parity}</p>
        <button onClick={() => dispatch(increment(2))}>INCREMENT</button>
      </div>
    </div>
  )
}

export default App
