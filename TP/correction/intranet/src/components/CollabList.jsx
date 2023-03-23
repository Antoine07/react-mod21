import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../css/CollabList.css";
import useExternalScripts from "../hooks/useExternalScripts";
import { fetchUsers, search } from "../store/userSlice";
import Header from "./Header";

function CollabList() {
  useExternalScripts("https://www.scriptdomain.com/script");

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Header />
      <input
        id="search-input"
        type="text"
        onChange={(e) => dispatch(search( { value : e.target.value, type: "name" }))}
      />

      <label htmlFor="search-select"> Rechercher par : </label>
      <select
        name="search-select"
        id="search-select"
        onChange={(e) => dispatch(search( { value : e.target.value, type: "localisation" }))}
      >
        <option value="name">Nom</option>
        <option value="localisation">Localisation</option>
      </select>

      <div className="filter">
        <label htmlFor="category-select"> Catégorie : </label>
        <select
          name="category-select"
          id="category-select"
          onChange={(e) => dispatch(search( { value : e.target.value, type: "category" }))}
        >
          <option value="">--Toutes les catégories--</option>
          <option value="Marketing">Marketing</option>
          <option value="Technique">Technique</option>
          <option value="Client">Client</option>
        </select>
      </div>

      <div className="CollabList">
        {users.map((user) => (
          <div className="CollabCard" key={user.id}>
            <div className="collab-photo">
              <img src={user.photo} alt="Description de l'image" />
            </div>

            <div className="collab-infos">
              <div className="service">{user.category}</div>
              <div>
                {user.firstname} {user.lastname} ({user.age} ans)
              </div>
              <div>
                {user.city}, {user.country}
              </div>
              <div>
                <i className="fa-solid fa-envelope"></i>
                {user.email}
              </div>
              <div>
                <i className="fa-solid fa-phone-flip"></i>
                {user.phone}
              </div>

              <div>
                <i className="fa-solid fa-cake-candles"></i>
                {user.birthdate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CollabList;
