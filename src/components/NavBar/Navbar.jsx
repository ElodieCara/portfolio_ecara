import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav">
          <NavLink exact to="/" className="nav__logo">
            <img src={Logo} alt="Logo" style={{ width: "80px" }} />
          </NavLink>

          <ul className={click ? "nav__menu active" : "nav__menu"}>
            <li className="nav__menu__item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav__menu__item__links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav__menu__item">
              <NavLink
                exact
                to="/Compétences"
                activeClassName="active"
                className="nav__menu__item__links"
                onClick={handleClick}
              >
                Compétences
              </NavLink>
            </li>
            <li className="nav__menu__item">
              <NavLink
                exact
                to="/Portfolio"
                activeClassName="active"
                className="nav__menu__item__links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav__menu__item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav__menu__item__links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
