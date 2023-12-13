import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo1.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Ferme le menu lorsque la route change
    setClick(false);
  }, [location.pathname]);

  const handleClick = () => setClick(!click);

  const isHomePage = location.pathname === "/portfolio_ecara/";

  return (
    <>
      <nav className={`navbar ${isHomePage ? "home-page" : "works-page"}`}>
        <div className="nav ">
          <img
            src={Logo}
            alt="Logo Portfolio ECara"
            style={{ width: "80px" }}
          ></img>

          {/*=== Menu ===*/}
          <ul className={click ? "nav--menu active" : "nav--menu"}>
            <li className="nav--menu__item nav--menu__item--display">
              <NavLink
                exact="true"
                to="/portfolio_ecara/"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav--menu__item nav--menu__item--hidden">
              <a
                href="#skills"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Compétences
              </a>
            </li>
            <li className="nav--menu__item nav--menu__item--hidden">
              <a
                href="#works"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Portfolio
              </a>
            </li>
            <li className="nav--menu__item nav--menu__item--hidden">
              <a
                href="#contact"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav--menu__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
