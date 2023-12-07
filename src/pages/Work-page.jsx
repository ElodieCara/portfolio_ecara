import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { dataDesign } from "../data/data";
import Github from "@/assets/logos/github.svg";
import Figma from "@/assets/logos/figma.png";
import Lien from "@/assets/logos/link.svg";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/ScrollBack/ScrollBack";
// import { Branche, Feuille } from "../components/Icon/Icon";

function WorkPage() {
  const { id } = useParams(); // Récupère l'ID du travail depuis l'URL
  const [active, setActive] = useState(parseInt(id));
  const navigate = useNavigate();
  const work = dataDesign.find((work) => work.id === parseInt(id)); // Trouve le travail correspondant à l'ID

  useEffect(() => {
    const index = dataDesign.findIndex((work) => work.id === parseInt(id));
    setActive(index);
  }, [id]);
  console.log("Valeur de l'id :", id);

  if (!work) {
    // Si aucun travail correspondant n'est trouvé, vous pouvez afficher un message d'erreur ou rediriger vers une page d'erreur
    return <div>Work not found</div>;
  }

  const handleButtonClick = (index) => {
    const newActive = index;
    const workId = dataDesign[newActive].id; // Récupère l'ID du travail en fonction de l'index du bouton cliqué
    navigate(`/portfolio_ecara/works/${workId}`); // Navigue vers la page du travail correspondant en utilisant son ID
    setActive(newActive); // Met à jour la valeur de 'active' avec l'index du bouton cliqué
  };

  return (
    <div className="work-page">
      <div className="work-page__background"></div>
      <header>
        <Navbar />
        <div className="work-page__container">
          <div className="work-page__block">
            <div className="work-page__menu">
              {dataDesign.map((work, index) => (
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

            <div
              className="work-page__block-content"
              style={{
                backgroundImage: `radial-gradient(
        farthest-side at 0 0,
        rgba(49, 42, 43, 0.3),
        rgba(255, 26, 198, 0)
      ),
      radial-gradient(
        farthest-side at  100% 100%,
        rgba(198, 169, 139),
        rgba(60, 221, 221, 0)
      ),
      radial-gradient(
        farthest-side at 50% 50%,
        rgba(82, 224, 196, 0),
        rgb(26, 22, 20)
      ), `,
                //   url(${work.image})
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="work-page__block-content__title">
                {work.title}
              </div>
              {/* <p>{work.libellé}</p> */}
            </div>
          </div>
        </div>
        <div className="work-page__link">
          <ul>
            {work.link && (
              <li>
                {work.link.map((link, li) => (
                  <Link
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={li}
                  >
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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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
            <h3 className="work-page__description__title">
              <div className="work-page__block-content__image">
                <img src={work.logo} alt={work.title} />{" "}
              </div>
              <article className="work-page__description__texte">
                {work.description}
              </article>
            </h3>

            <hr className="border-title" />
            <div className="work-page__description__techno">
              {work.techno.map((techno, id) => (
                <img src={techno.url} key={id} alt={techno.alt} />
              ))}
            </div>
            <div className="work-page__description__img">
              <img src={work.capture} alt="" />
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
