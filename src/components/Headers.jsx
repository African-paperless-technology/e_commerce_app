import Navbar from "../components/Navbar";
import alerteUtilisateur from "../assets/alerteUtilisateur.png";
import coeur from "../assets/coeur.png";
import panier from "../assets/panier.png";
import loupe from "../assets/loupe-arrondie.png";

const Headers = () => {
  return (
    <nav className="px-6 pt-4 pb-2">
      <div className="flex justify-between flex-row items-center ">
        <h1>FURNIRO</h1>
        <div className="flex  items-center pl-9">
          <Navbar />
        </div>
        <div className="gap-5 flex  items-center pr-4">
          <img src={alerteUtilisateur} alt="" className="w-6" />
          <img src={loupe} alt="" className="w-6" />
          <img src={coeur} alt="" className="w-6" />
          <img src={panier} alt="" className="w-6" />
        </div>
      </div>
    </nav>
  );
};

export default Headers;
