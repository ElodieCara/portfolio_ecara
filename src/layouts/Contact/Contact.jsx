import Logo from "@/assets/Logo1.png";
import Arrow from "@/assets/Arrow 5.png";
import { Facebook, Linkedin } from "../../components/Icon/Icon";

const ContactForm = () => {
  const title = "Contact";

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__container__title">
          <h1>{title}</h1>
          <hr className="border-title" />
        </div>
      </div>
      <div className="contact__contenu">
        <div className="contact__contenu__infos-contact">
          <div className="contact__contenu__title ">
            <h2>Laissez-moi un message !</h2>
          </div>
          <hr className="border-title" />
          <li>
            Email
            <a href="mailto:contact.ecara@gmail.com">contact.ecara@gmail.com</a>
          </li>
          <hr className="border-title" />
          <li>
            Adresse<p>Gisors, France</p>
          </li>
          <hr className="border-title" />
          <li>
            Social media
            <span>
              <a href="https://www.facebook.com/elodie.caradeuc">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/e-cara">
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
            </span>
          </li>
        </div>
        <div className="contact__contenu__content">
          <form
            className="contact__contenu__content__form"
            method="POST"
            action="https://getform.io/f/a923b466-7e11-4a57-be86-367f9d312768"
          >
            <div className="contact__contenu__content__form--icon">
              <img src={Logo} width={55} alt="Logo Portfolio ECara" />
            </div>
            <div className="contact__contenu__content__form--control">
              <label htmlFor="name" className="visually-hidden">
                Nom
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Nom"
                id="name"
                name="name"
                required
                autoComplete="off"
              />
            </div>
            <div className="contact__contenu__content__form--control">
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
                autoComplete="off"
              />
            </div>
            <div className="contact__contenu__content__form--control">
              <label htmlFor="message" className="visually-hidden">
                Message
              </label>
              <textarea
                className="form-control"
                placeholder="Message"
                id="message"
                name="message"
                required
              />
            </div>
            <button
              className="contact__contenu__content__form--button"
              type="submit"
            >
              Envoyer
              <img src={Arrow} alt="Flèche Envoie du Message" />
            </button>
          </form>
        </div>
      </div>
      {/* <div className="contact__button">
        <a
          href="https://elodiecara.github.io/cv-ecara/"
          className="contact__button__dl"
        >
          <span>Mon CV</span>
        </a>
      </div> */}
    </section>
  );
};
export default ContactForm;
