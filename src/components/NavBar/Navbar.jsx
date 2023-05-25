// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import Logo from "../../assets/Logo.png";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const location = useLocation();
//   const handleClick = () => setNav(!nav);

//   useEffect(() => {
//     // Fermer le menu mobile lorsque l'utilisateur navigue vers une autre page
//     setNav(false);
//   }, [location.pathname]);

//   return (
//     <nav className="nav container">
//       <a href="#" className="nav__logo">
//         <img src={Logo} alt="Logo" style={{ width: "180px" }} />
//       </a>
//       {/* menu */}
//       <div className="nav__menu" id="nav-menu">
//         <ul className="nav__list grid">
//           <li>
//             <a href="#home">Accueil</a>
//           </li>
//           <li className="nav__item">
//             <a href="#skills" className="nav__link">
//               Compétences
//             </a>
//           </li>
//           <li className="nav__item">
//             <a href="#portfolio" className="nav__link">
//               Portfolio
//             </a>
//           </li>
//           <li className="nav__item">
//             <a href="#contact" className="nav__link">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* Hamburger */}
//       <div onClick={() => setNav(!nav)} className="nav__btns">
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>
//       {/* Mobile menu */}
//       <ul
//         className="nav__mobile"
//         style={!nav ? { visibility: "hidden" } : { width: "100%" }}
//       >
//         <li onClick={handleClick} className="py-6 text-4xl">
//           <a href="#home">Home</a>
//         </li>
//         <li onClick={handleClick} className="py-6 text-4xl">
//           <a href="#about">About</a>
//         </li>
//         <li onClick={handleClick} className="py-6 text-4xl">
//           <a href="#skills">Skills</a>
//         </li>
//         <li onClick={handleClick} className="py-6 text-4xl">
//           <a href="#work">Work</a>
//         </li>
//         <li onClick={handleClick} className="py-6 text-4xl">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       {/* s */}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav container">
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
