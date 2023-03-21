import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/userSlice"
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector( state => state);

  return (
    <div className="App">
      <div className="card">
        { users.length > 0 && "Afficher les users" }
      </div>
    </div>
  );
}

export default App;
