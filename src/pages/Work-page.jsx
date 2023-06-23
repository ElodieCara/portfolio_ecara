import { useParams } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
// import Header from "../layouts/Header/Header";
import { dataWorks } from "../data/data";

function WorkPage() {
  const { id } = useParams(); // Récupère l'ID du travail depuis l'URL
  const work = dataWorks.find((work) => work.id === parseInt(id)); // Trouve le travail correspondant à l'ID

  console.log("Valeur de l'id :", id);

  if (!work) {
    // Si aucun travail correspondant n'est trouvé, vous pouvez afficher un message d'erreur ou rediriger vers une page d'erreur
    return <div>Work not found</div>;
  }

  return (
    <div className="work-page">
      <h1>{work.title}</h1>
      <p>{work.description}</p>
      {/* Ajoutez ici les autres éléments de contenu pour le travail */}
    </div>
  );
}

export default WorkPage;
