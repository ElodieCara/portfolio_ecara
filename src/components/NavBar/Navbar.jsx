import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav">
          <NavLink exact="true" to="/" className="nav__logo">
            <img src={Logo} alt="Logo" style={{ width: "80px" }} />
          </NavLink>

          {/*=== Menu ===*/}
          <ul className={click ? "nav--menu active" : "nav--menu"}>
            <li className="nav--menu__item">
              <NavLink
                exact="true"
                to="/"
                activeclassame="active"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav--menu__item">
              <NavLink
                exact="true"
                to="/Compétences"
                activeclassname="active"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Compétences
              </NavLink>
            </li>
            <li className="nav--menu__item">
              <NavLink
                exact="true"
                to="/Portfolio"
                activeclassname="active"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav--menu__item">
              <NavLink
                exact="true"
                to="/contact"
                activeclassname="active"
                className="nav--menu__item__links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav--menu__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          {/*=== Nav Social-Icon ===*/}
          <div className="nav--social">
            <ul className="nav--social__link">
              <li className="nav--social__link__icon">
                <a
                  href="mailto:caradeuc.elodie@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#C6A98B"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="6 12 18 24"
                    />
                    <foreignObject x="20" y="20" width="60" height="60">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <FaLinkedin
                          size={30}
                          className="nav--social__link__icon--logo"
                        />
                      </div>
                    </foreignObject>
                  </svg>
                </a>
              </li>
              <li className="nav--social__link__icon">
                <a
                  href="mailto:caradeuc.elodie@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#C6A98B"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="6 12 18 24"
                    />
                    <foreignObject x="20" y="20" width="60" height="60">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <FaGithub
                          size={30}
                          className="nav--social__link__icon--logo"
                        />
                      </div>
                    </foreignObject>
                  </svg>
                </a>
              </li>
              <li className="nav--social__link__icon">
                <a
                  href="mailto:caradeuc.elodie@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#C6A98B"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="6 12 18 24"
                    />
                    <foreignObject x="20" y="20" width="60" height="60">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <HiOutlineMail
                          size={30}
                          className="nav--social__link__icon--logo"
                        />
                      </div>
                    </foreignObject>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
