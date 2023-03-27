import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, search } from "../store/userSlice";
import "./User.css";
import Card from "./Card";

function User() {
  const { users, load } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  function handleChange(e) {
    const { value, name } = e.target;

    name === "name"
      ? setName(value)
      : name === "category"
      ? setCategory(value)
      : null;

    dispatch(search({ value, type: name }));
    if (name === "name" && value.trim() === "") setCategory("default");
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (load === false)
    return (
      <div className="container sm:text-center">
        <p>
          Name:
          <input type="text" onChange={handleChange} name="name" value={name} />
          Catégorie:
          <select
            disabled={name === ""}
            value={category}
            onChange={handleChange}
            name="category"
          >
            <option defaultValue="default" value="all" >
              -- Please choose an option --
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Technique">Technique</option>
            <option value="Client">Client</option>
          </select>
        </p>
        {users.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {users.map((user) => (
              <Card key={user.id} {...user} />
            ))}
          </div>
        )}
      </div>
    );

  return <p>Loading ...</p>;
}

export default User;
