import { FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Photo from "../../assets/Photo.jpg";
import { UilMouseAlt, UilArrowDown } from "@iconscout/react-unicons";

// import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/e-cara"
              target="_blank"
              rel="noreferrer"
              className="home__social--icon"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/ElodieCara"
              target="_blank"
              rel="noreferrer"
              className="home__social--icon"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:caradeuc.elodie@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="home__social--icon"
            >
              <HiOutlineMail />
            </a>
          </div>

          <div className="home__photo">
            <img className="home__photo__img" src={Photo} alt="Photo" />
          </div>

          <div className="home__data">
            <div className="home__data__presentation">
              <h1 className="home__data__presentation__title">
                Elodie Caradeuc
              </h1>
              <span className="home__data__presentation__stars">
                <FaStar className="home__data_presentation__stars--top" />
              </span>
            </div>
            <h3 className="home__data__subtitle">Développeur Web Junior</h3>
            <p className="home__data__description">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#contact" className="home__data__button">
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll__button--flex">
            <UilMouseAlt className="home__scroll__button--mouse" />
            <span className="home__scroll__button--name">Scroll down</span>
            <UilArrowDown className="home__scroll__button--arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
