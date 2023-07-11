import { useEffect, useRef } from "react";
import Photo from "../../assets/Photo1.png";
import { Stars } from "../../components/Icon/Icon";
import Scroll from "../../components/ScrollBtn/ScrollBtn";
import NavSocial from "../../components/NavBar/NavSocial";

const Header = () => {
  const cardsRef = useRef(null);
  const imagesRef = useRef([]);
  const backgroundsRef = useRef([]);

  const range = 40;

  const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { x, y } = event;

      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      cardsRef.current.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

      imagesRef.current.forEach((image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      backgroundsRef.current.forEach((background) => {
        background.style.backgroundPosition = `${xValue * 0.45}px ${
          -yValue * 0.45
        }px`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const approachText =
    "Enthousiaste et passionnée par le développement web, je viens de terminer ma formation de Développeuse Intégrateur Web chez OpenClassrooms. Je suis actuellement à la recherche d'un poste stimulant où je pourrai mettre en pratique mes compétences et continuer d'apprendre au sein d'une équipe dynamique.";

  return (
    <section className="home" id="home">
      <div className="home__container">
        <NavSocial />
        <div className="home__content cards" ref={cardsRef}>
          <div className="home__photo">
            <div
              className="home__photo__bg"
              // style={{ backgroundImage: "url(@/assets/card-bg.png)" }}
              ref={(el) => (backgroundsRef.current[0] = el)}
            ></div>
            <img
              className="home__photo__img"
              src={Photo}
              alt="Photo"
              ref={(el) => (imagesRef.current[0] = el)}
            />
          </div>

          <div className="home__data">
            <div className="home__data__presentation">
              <h1 className="home__data__presentation__title">
                Elodie Caradeuc
              </h1>
              <span className="home__data__presentation__stars">
                <Stars />
              </span>
            </div>
            <h3 className="home__data__subtitle">Développeur Web Junior</h3>
            <p className="home__data__description">{approachText}</p>
            <a href="#contact" className="home__data__button">
              <span>Contactez-moi</span>
            </a>
          </div>
          <Scroll />
        </div>
      </div>
    </section>
  );
};

export default Header;
