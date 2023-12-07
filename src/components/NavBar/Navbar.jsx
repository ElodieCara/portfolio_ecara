import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo1.png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav">
          <NavLink exact="true" className="nav__logo">
            <img
              src={Logo}
              alt="Logo Portfolio ECara"
              style={{ width: "80px" }}
            />
          </NavLink>

          {/*=== Menu ===*/}
          <ul className={click ? "nav--menu active" : "nav--menu"}>
            <li className="nav--menu__item">
              <NavLink
                exact="true"
                to="/portfolio_ecara/"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav--menu__item">
              <a
                href="#skills"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Compétences
              </a>
            </li>
            <li className="nav--menu__item">
              <a
                href="#works"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Portfolio
              </a>
            </li>
            <li className="nav--menu__item">
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
