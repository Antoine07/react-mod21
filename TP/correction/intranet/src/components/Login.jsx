import "../css/Login.css";
import {Link} from "react-router-dom"

function Login() {

  return (
    <div className="Login">
        <h1>Connexion</h1>
        <hr />
        <span>Pour vous connecter à l'intranet, entrez votre identifiant et votre mot de passe</span>
        <div className="loginForm">

            <div class="flex-end">
                <div className="emailInput">
                    <label htmlFor="email">Email :</label>
                    <input name="email" id="email" cols="30" rows="10"></input>
                </div>

                <div className="password">
                    <label htmlFor="password">Mot de passe :</label>
                    <input name="password" id="password" cols="30" rows="10"></input>
                </div>
            </div>
            
            <Link to={`hello`}>
                <button className="submit">CONNEXION</button>
            </Link>
        </div>
    </div>
  );
}

export default Login;
