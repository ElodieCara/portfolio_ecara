import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function NavSocial() {
  return (
    /*=== Nav Social-Icon ===*/

    <div className="nav--social">
      <ul className="nav--social__link">
        <li className="nav--social__link__icon">
          <a
            href="https://www.linkedin.com/in/e-cara"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="70"
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
                  <FaLinkedinIn
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
            href="https://github.com/ElodieCara"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="70"
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
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="70"
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
  );
}

export default NavSocial;
