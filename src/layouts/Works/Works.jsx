// import { useRef } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { dataWorks } from "@/data/data.js";
import { dataDesign } from "@/data/data.js";

const FormationSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {dataWorks.map((item, index) => (
        <div className="works__card" key={index}>
          <div className="works__card__date">{item.date}</div>
          <div className="works__card__img">
            <img src={item.image} alt={item.title} />
            <div className="works__card__body">
              <h3 className="works__card__body__title">{item.title}</h3>
              <p className="works__card__body__text">{item.description}</p>
              <button>More</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const PersonnelsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {dataDesign.map((project, id) => (
        <div className="projects__card" key={id}>
          <div className="projects__card__img">
            <img src={project.image} alt="" />
          </div>
          <div className="projects__card__body">
            <h3 className="projects__card__body__title">{project.title}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Works = () => {
  const title = "Portfolio";

  // État pour suivre la section active
  const [activeSection, setActiveSection] = useState("formation");

  // Fonction pour changer la section active
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="works" id="works">
      <div className="works__container">
        <div className="works__container__title">
          <h1>{title}</h1>
        </div>
        <div className="works__container__links">
          {/* Bouton pour la section "Formation" */}
          <li
            className={`works__container__links__btn ${
              activeSection === "formation" ? "active" : ""
            }`}
          >
            <button
              className={`${activeSection === "formation" ? "active" : ""}`} // Ajoute la classe "active" si c'est la section active
              onClick={() => handleSectionChange("formation")} // Appelle la fonction pour changer la section active
            >
              Formation
            </button>
          </li>
          {/* Bouton pour la section "Personnels" */}
          <li
            className={`works__container__links__btn ${
              activeSection === "personnels" ? "active" : "" // Ajoute la classe "active" si c'est la section active
            }`}
          >
            <button
              className={`${activeSection === "personnels" ? "active" : ""}`} // Ajoute la classe "active" si c'est la section active
              onClick={() => handleSectionChange("personnels")} // Appelle la fonction pour changer la section active
            >
              Personnels
            </button>
          </li>
        </div>
      </div>
      {/* Contenu des sections en fonction de la section active */}
      <div className="works__content">
        {activeSection === "formation" && <FormationSection />}{" "}
        {/* Affiche la section "Formation" si c'est la section active */}
        {activeSection === "personnels" && <PersonnelsSection />}{" "}
        {/* Affiche la section "Formation" si c'est la section active */}
      </div>
    </section>
  );
};
export default Works;
