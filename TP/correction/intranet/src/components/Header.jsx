import "../css/Header.css";
import useExternalScripts from "../hooks/useExternalScripts"

function Header() {

useExternalScripts("https://www.scriptdomain.com/script")

  return (
    <div className="Header">
        <div className="logo">
            <i className="fa-solid fa-network-wired"></i>
            <h1>INTRANET</h1>
        </div>
        <button>
            <i className="fa-solid fa-right-to-bracket"></i>
            Connexion
        </button>
    </div>
  );
}

export default Header;
