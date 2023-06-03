import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content__links">
          <a href="mailto:caradeuc.elodie@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/ElodieCara">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/e-cara">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer__content__text">
          <p>© 2023 E Cara | Tous droits réservés</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
