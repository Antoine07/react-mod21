import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "./store/userSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state);
  const [displayId, setDisplayId] = useState(null);

  const handleShow = id => {
    setDisplayId(id);
  }

  const handleDelete = id => dispatch(deleteUser(id)) ;

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => dispatch(fetchUsers())}>get</button>
        
        {users.length > 0 && <ul>
          {users.map(u => ( 
          <li style={{listStyle: "none"}} key={u.id}>
            {u.username}, {u.phone}
            <p hidden={u.id !== displayId } style={{color: "white"}} >{u.len}</p>
            <button onClick={() => handleShow(u.id)}>calcul</button>

            <button onClick={() => handleDelete(u.id)}>X</button>

          </li> 
          ))}
        </ul>}
      </div>
    </div>
  );
}

export default App;
