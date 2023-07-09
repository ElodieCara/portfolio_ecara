import { useState, useEffect } from "react";
import Slideshow from "@/components/Slideshow/Slideshow";
import { dataWorks } from "../../data/data";

const Works = () => {
  const title = "Portfolio";

  const [, setWorks] = useState([]);

  useEffect(() => {
    setWorks(dataWorks);
  }, []);

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
          <hr className="border-title" />
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
        <Slideshow dataWorks={dataWorks} activeSection={activeSection} />
      </div>
    </section>
  );
};

export default Works;
