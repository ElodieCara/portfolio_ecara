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
    const isMobile = window.innerWidth <= 768; // Seuil pour mobiles
    if (!isMobile) {
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
    }
  }, []);

  const approachText =
    "Bienvenue sur mon portfolio ! Je partage ici mes compétences et expériences en développement web. Formée chez OpenClassrooms en tant que Développeuse Intégrateur Web, je me spécialise désormais en développement back-end avec .NET. Découvrez mes projets et contactez-moi pour toute collaboration ou opportunité professionnelle.";
  return (
    <section className="home" id="home">
      <div className="home__container">
        <NavSocial />
        <div className="home__content cards" ref={cardsRef}>
          <div className="home__photo">
            <div
              className="home__photo__bg"
              ref={(el) => (backgroundsRef.current[0] = el)}
            ></div>
            <img
              className="home__photo__img"
              src={Photo}
              alt="Photo Profil ECara"
              ref={(el) => (imagesRef.current[0] = el)}
            />
          </div>

          <div className="home__data">
            <div className="home__data__presentation">
              <h1 className="home__data__presentation__title">
                Elodie Caradeuc
              </h1>
              <Stars />
              <span className="home__data__presentation__stars"></span>
            </div>
            <h2 className="home__data__subtitle">Développeuse Front-end</h2>
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
