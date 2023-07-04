import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { dataWorks } from "../data/data";
import Github from "../../public/images/logos/github.svg";
import Figma from "../../public/images/logos/figma.png";
import Lien from "../../public/images/logos/link.svg";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/ScrollBack/ScrollBack";
import { Branche, Feuille } from "../components/Icon/Icon";

function WorkPage() {
  const { id } = useParams(); // Récupère l'ID du travail depuis l'URL
  const [active, setActive] = useState(parseInt(id));
  const navigate = useNavigate();
  const work = dataWorks.find((work) => work.id === parseInt(id)); // Trouve le travail correspondant à l'ID

  useEffect(() => {
    const index = dataWorks.findIndex((work) => work.id === parseInt(id));
    setActive(index);
  }, [id]);
  console.log("Valeur de l'id :", id);

  if (!work) {
    // Si aucun travail correspondant n'est trouvé, vous pouvez afficher un message d'erreur ou rediriger vers une page d'erreur
    return <div>Work not found</div>;
  }

  const handleButtonClick = (index) => {
    const newActive = index;
    const workId = dataWorks[newActive].id; // Récupère l'ID du travail en fonction de l'index du bouton cliqué
    navigate(`/works/${workId}`); // Navigue vers la page du travail correspondant en utilisant son ID
    setActive(newActive); // Met à jour la valeur de 'active' avec l'index du bouton cliqué
  };

  return (
    <div className="work-page">
      <div
        className="work-page__background"
        style={{
          backgroundImage: `linear-gradient(to top, #1a1614, rgba(25, 245, 255, 0)), url(${work.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <header>
        <Navbar />
        <div className="work-page__container">
          <div className="work-page__block">
            <div className="work-page__menu">
              {dataWorks.map((work, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)} // Appelle la fonction handleButtonClick avec l'index du bouton cliqué
                  className={`button ${index === active ? "active" : ""} `}
                  // style={{ color: index === active ? "green" : "" }} // Applique la classe "active" si l'ID du travail correspond à l'ID de l'URL
                >
                  <span
                    className={`button-number ${
                      index === active ? "active-number" : "" // Applique la classe "active" si l'ID du travail correspond à l'ID de l'URL
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>

            <div className="work-page__block-content">
              <div className="work-page__block-content__image">
                <img src={work.logo} alt={work.title} />
              </div>
              <p>{work.libellé}</p>
            </div>
          </div>
        </div>
        <div className="work-page__link">
          <ul>
            {work.link && (
              <li>
                {work.link.map((link, li) => (
                  <Link to={link.url} target="_blank" key={li}>
                    <div className="image-container">
                      <img src={Lien} alt="" width={20} />
                    </div>
                    <span>Site</span>
                  </Link>
                ))}
              </li>
            )}
            {work.github && (
              <li>
                {work.github.map((github, gi) => (
                  <Link
                    to={github.url}
                    target="_blank"
                    key={gi}
                    alt={github.name}
                  >
                    <div className="image-container">
                      <img src={Github} alt="" width={20} />
                    </div>
                    <span>Code Source</span>
                  </Link>
                ))}
              </li>
            )}
            {work.maquette && (
              <li>
                {work.maquette.map((maquette, ma) => (
                  <Link
                    to={maquette.url}
                    target="_blank"
                    alt={maquette.name}
                    key={ma}
                  >
                    <div className="image-container">
                      <img src={Figma} alt="" width={20} />
                    </div>
                    <span>Maquette</span>
                  </Link>
                ))}
              </li>
            )}
          </ul>
        </div>
      </header>
      <main>
        <div className="work-page__description">
          <div className="work-page__description__content">
            <h3 className="work-page__description__title">{work.title}</h3>

            <hr className="border-title" />
            <div className="work-page__description__techno">
              {work.techno.map((techno, id) => (
                <img src={techno.url} key={id} alt={techno.alt} />
              ))}
            </div>

            <article className="work-page__description__texte">
              {work.description}
            </article>
            <div className="work-page__description__img">
              <img src={work.capture} alt="" width={200} />
            </div>
          </div>
          <ScrollToTopButton />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>

      {/* Ajoutez ici les autres éléments de contenu pour le travail */}
    </div>
  );
}

export default WorkPage;
