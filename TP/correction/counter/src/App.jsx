import { useDispatch, useSelector } from "react-redux";
import { increment, counterAsync } from "./store/counterSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { number, parity } = useSelector( state => state.c );
  const { countA, active  } = useSelector( state => state.ca );

  // assignation par décomposition 
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // const { c: { number, parity }, ca: { countA } } = useSelector((state) => {
  //   return {
  //     c: state.c,
  //     ca: state.ca,
  //   };
  // });

  return (
    <div className="App">
      <div className="card">
        <p>Counter Synchrone : {number}</p>
        <p>{parity}</p>
        <br />
        <p>Counter Async {countA}</p>
        <button onClick={() => dispatch(increment(2))}>INCREMENT SYNC</button>
        <button disabled={!active} onClick={() => dispatch(counterAsync(1))}>
          INCREMENT ASYNC
        </button>
      </div>
    </div>
  );
}

export default App;
