import { useParams, useNavigate, Link } from "react-router-dom";
import { dataWorks } from "../data/data";
import Github from "../../public/images/logos/github.svg";
import Figma from "../../public/images/logos/figma.png";
import Lien from "../../public/images/logos/link.svg";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

function WorkPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'ID du travail depuis l'URL
  const work = dataWorks.find((work) => work.id === parseInt(id)); // Trouve le travail correspondant à l'ID

  console.log("Valeur de l'id :", id);

  if (!work) {
    // Si aucun travail correspondant n'est trouvé, vous pouvez afficher un message d'erreur ou rediriger vers une page d'erreur
    return <div>Work not found</div>;
  }

  const handleButtonClick = (index) => {
    navigate(`/work/${index}`);
  };

  return (
    <div className="work-page">
      <header>
        <Navbar />
        <div className="work-page__block">
          <div className="work-page__menu">
            {dataWorks.map((work, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={index === parseInt(id) ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div
            className="work-page__block-content"
            style={{
              backgroundImage: `linear-gradient(to top, #1a1614, rgba(255, 255, 255, 0)), url(${work.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>{work.title}</h1>
            <p>{work.description}</p>
          </div>
        </div>
        <div className="work-page__link">
          <ul className="active">
            <li>
              {work.link &&
                work.link.map((link, li) => (
                  <Link to={link.url} key={li}>
                    <img src={Lien} alt="" width={15} />
                    Site
                  </Link>
                ))}
            </li>
            <li>
              {work.github &&
                work.github.map((github, gi) => (
                  <Link to={github.url} key={gi} alt={github.name}>
                    <img src={Github} alt="" width={10} />
                    Code Source
                  </Link>
                ))}
            </li>
            <li>
              {work.maquette &&
                work.maquette.map((maquette, ma) => (
                  <Link to={maquette.url} alt={maquette.name} key={ma}>
                    <img src={Figma} alt="" width={10} />
                    Maquette
                  </Link>
                ))}
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="work-page__description">
          <h3 className="work-page__description__title"></h3>
          <span>{work.title}</span>
          <hr className="border-title" />
          <div className="work-page__description__techno">
            {work.techno.map((techno, id) => (
              <img
                src={techno.url}
                key={id}
                alt={techno.alt}
                height={20}
                width={20}
              />
            ))}
          </div>
          <article className="work-page__description__texte">
            {work.description}
          </article>
          <div className="work-page__description__img">
            <img src={work.capture} alt="" width={200} />
          </div>
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
