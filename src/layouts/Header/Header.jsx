import Photo from "../../assets/Photo.jpg";
import Icon from "../../components/Icon/Icon";
import Scroll from "../../components/ScrollBtn/ScrollBtn";

// import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {
  const approachText =
    "Enthousiaste et passionnée par le développement web, je viens tout juste de terminer ma formation de Développeuse Intégrateur Web chez OpenClassrooms. Je suis actuellement à la recherche d'un poste stimulant où je pourrai mettre en pratique mes compétences et continuer d'apprendre au sein d'une équipe dynamique.";

  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__photo">
            <img className="home__photo__img" src={Photo} alt="Photo" />
          </div>

          <div className="home__data">
            <div className="home__data__presentation">
              <h1 className="home__data__presentation__title">
                Elodie Caradeuc
              </h1>
              <span className="home__data__presentation__stars">
                {/* <FaStar className="home__data_presentation__stars--top" /> */}
                <Icon />
              </span>
            </div>
            <h3 className="home__data__subtitle">Développeur Web Junior</h3>
            <p className="home__data__description">{approachText}</p>
            <a href="#contact" className="home__data__button">
              <span>Contact Me</span>
            </a>
          </div>
          <Scroll />
        </div>
      </div>
    </section>
  );
};

export default Header;
