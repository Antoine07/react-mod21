import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import "../css/CollabCard.css";
import useExternalScripts from "../hooks/useExternalScripts"
import { fetchUsers } from "../store/userSlice";


function CollabCard() {

    useExternalScripts("https://www.scriptdomain.com/script")


    const dispatch = useDispatch();
    const { randomUser } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

  return (
    <>
        <div className="CollabCard">
            <div className="collab-photo">
                <img src={randomUser.photo} alt="Description de l'image" />            
            </div>
            <div className="collab-infos">
                <div className="service">{randomUser.category}</div>
                <div>{randomUser.firstname} {randomUser.lastname} ({ randomUser.age } ans)</div>
                <div>{randomUser.city}, {randomUser.country}</div>
                <div>
                    <i className="fa-solid fa-envelope"></i>
                    {randomUser.email}
                </div>
                <div>
                    <i className="fa-solid fa-phone-flip"></i>
                    {randomUser.phone}
                </div>
                
                <div>
                    <i className="fa-solid fa-cake-candles"></i>
                    {randomUser.birthdate}
                </div>
            </div>
        </div>

        <button onClick={() => dispatch(fetchUsers())}>DIRE BONJOUR A UN AUTRE</button>

    </>
  );
}

export default CollabCard;