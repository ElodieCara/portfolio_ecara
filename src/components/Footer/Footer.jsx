import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content__links">
          <a
            href="https://www.linkedin.com/in/e-cara"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="70"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#1a1614"
                strokeWidth="3"
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
                  <FaLinkedinIn
                    size={60}
                    className="nav--social__link__icon--logo"
                  />
                </div>
              </foreignObject>
            </svg>
          </a>

          <a
            href="https://github.com/ElodieCara"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="70"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#1a1614"
                strokeWidth="3"
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
                    size={100}
                    className="nav--social__link__icon--logo"
                  />
                </div>
              </foreignObject>
            </svg>
          </a>

          <a
            href="mailto:caradeuc.elodie@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#1a1614"
                strokeWidth="3"
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
                  <FaEnvelope
                    size={100}
                    className="nav--social__link__icon--logo"
                  />
                </div>
              </foreignObject>
            </svg>
          </a>
        </div>
        <div className="footer__content__text">
          <p>© 2023 E Cara | Tous droits réservés</p>
        </div>
        <div className="footer__content__credits">
          <a
            href="https://firefly.adobe.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Adobe Firefly"
          >
            Images générées avec Adobe Firefly
          </a>
          <br />
          <a href="https://www.canva.com/fr_fr/creer/logos/" aria-label="Canva">
            Logo créé avec Canva
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
