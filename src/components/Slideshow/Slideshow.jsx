import { useEffect, useState } from "react";
import Slider from "react-slick";
import { dataDesign } from "@/data/data.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Slideshow = ({ workId, dataWorks, activeSection }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktop(window.innerWidth > 1024);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 960); // Modifier le point de rupture pour la version tablette
    };

    if (activeSection === "formation") {
      resizeHandler();
      window.addEventListener("resize", resizeHandler);
    }

    // resizeHandler(); // Appel initial pour définir les valeurs initiales
    // window.addEventListener("resize", resizeHandler); // Ajouter un écouteur d'événements pour les redimensionnements de fenêtre

    return () => {
      if (activeSection === "formation") {
        resizeHandler();
        window.removeEventListener("resize", resizeHandler); // Supprimer l'écouteur d'événements lors du démontage du composant
      }
    };
  }, [activeSection]);

  const slidesToShow =
    isDesktop && activeSection === "formation" ? 3 : isTablet ? 2 : 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  if (activeSection === "formation") {
    return (
      <Slider {...settings}>
        {dataWorks?.map((item, index) => (
          <div className="works__card" key={index}>
            <div className="works__card__date">{item.date}</div>
            <div className="works__card__img">
              <img src={item.image} alt={item.title} />
              <div className="works__card__body">
                <h3 className="works__card__body__title">{item.title}</h3>
                {/* <p className="works__card__body__text">{item.description}</p> */}
                <Link
                  className="works__card__body__link"
                  to={`/works/${workId[index]}`}
                >
                  <span> More</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  } else if (activeSection === "personnels") {
    return (
      <Slider {...settings}>
        {dataDesign?.map((project, id) => (
          <div className="projects__card" key={id}>
            <div className="projects__card__img">
              <img src={project.image} alt="" />
            </div>
            <div className="projects__card__body">
              <h3 className="projects__card__body__title">{project.title}</h3>
              <div className="projects__card__body__techno">
                {project.techno.map((techno, id) => (
                  <img
                    src={techno.url}
                    key={id}
                    alt=""
                    height={20}
                    width={20}
                  />
                ))}
              </div>

              <div className="projects__card__body__link">
                <h3>Liens</h3>
                {project.link.map((link, id) => (
                  <a
                    href={link.url}
                    key={id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      height={20}
                      width={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }

  return null; // Retourne null si la section active n'est ni "formation" ni "personnels"
};

Slideshow.propTypes = {
  workId: PropTypes.arrayOf(PropTypes.number).isRequired,
  dataWorks: PropTypes.array.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Slideshow;
