import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice";

import './App.css'


function App() {
  const dispatch = useDispatch();
  const { number, parity } = useSelector( state => state );

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
