import Slider from "react-slick";
import { dataDesign } from "@/data/data.js";
import Github from "@/assets/logos/github.svg";
import Figma from "@/assets/logos/figma.png";
import Lien from "@/assets/logos/link.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { dataWorks } from "@/data/data.js";

const Slideshow = ({ activeSection }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (activeSection === "formation") {
    return (
      <Slider {...settings} className="slider">
        {dataWorks.map((item, index) => (
          <div className="works__card" key={index}>
            <div className="works__card__date">{item.date}</div>
            <div className="works__card__img">
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="works__card__body">
              <div
                className="works__card__body__logo"
                style={{ backgroundImage: `url(${item.logo})` }}
              ></div>
              {item.techno && Array.isArray(item.techno) && (
                <div className="works__card__body__techno">
                  {item.techno.map((techno, id) => (
                    <img src={techno.url} key={id} alt={techno.alt} />
                  ))}
                </div>
              )}
              <div className="works__card__body__link">
                <ul>
                  {item.link && (
                    <li>
                      {item.link.map((link, li) => (
                        <Link to={link.url} target="_blank" key={li}>
                          <div className="image-container">
                            <img src={Lien} alt="Site" width={10} />
                          </div>
                          {/* <span>Site</span> */}
                        </Link>
                      ))}
                    </li>
                  )}
                  {item.github && (
                    <li>
                      {item.github.map((github, gi) => (
                        <Link
                          to={github.url}
                          target="_blank"
                          key={gi}
                          alt={github.name}
                        >
                          <div className="image-container">
                            <img src={Github} alt="Code Source" width={20} />
                          </div>
                          {/* <span>Code Source</span> */}
                        </Link>
                      ))}
                    </li>
                  )}
                  {item.maquette && (
                    <li>
                      {item.maquette.map((maquette, ma) => (
                        <Link
                          to={maquette.url}
                          target="_blank"
                          alt={maquette.name}
                          key={ma}
                        >
                          <div className="image-container">
                            <img src={Figma} alt="Maquette" width={20} />
                          </div>
                          {/* <span>Maquette</span> */}
                        </Link>
                      ))}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  } else if (activeSection === "personnels") {
    // Calculer le nombre de cartes à afficher
    const slidesToShow = Math.min(2, dataDesign.length);

    return (
      <Slider {...settings} slidesToShow={slidesToShow} className="slider">
        {dataDesign?.map((project, id) => (
          <div className="projects__card" key={id}>
            <div className="projects__card__img">
              <img src={project.image} alt="projets" />
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
              {/* <div className="projects__card__body__link">
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
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    );
  }

  return null;
};

Slideshow.propTypes = {
  dataWorks: PropTypes.array.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Slideshow;
