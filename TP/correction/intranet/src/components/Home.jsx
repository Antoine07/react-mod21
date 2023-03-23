import "../css/Home.css";
import Header from "./Header";
import CollabCard from "./CollabCard";


function Home() {

  return (
    <div className="Home">
        <Header />
        <h1>Bienvenue sur l'intranet</h1>
        <h2>La plate-forme de l'entreprise qui vous permet de retouver tous vos collaborateurs</h2>
        <h3>Avez-vous dit bonjour à :</h3>

        <CollabCard />
    </div>
  );
}

export default Home;