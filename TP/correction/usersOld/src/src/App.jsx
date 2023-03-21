import { useDispatch, useSelector } from "react-redux";
import { fetchUsers  } from "./store/userSlice"
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector( state => state);

  console.log(users);

  return (
    <div className="App">
      <div className="card">

      </div>
    </div>
  );
}

export default App;
