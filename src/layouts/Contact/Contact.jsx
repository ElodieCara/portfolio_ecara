import { useState } from "react";
import Logo from "@/assets/Logo1.png";
import Arrow from "@/assets/Arrow 5.png";
import { Facebook, Linkedin } from "../../components/Icon/Icon";

const ContactForm = () => {
  const title = "Contact";
  // const [formStatus, setFormStatus] = useState("Send");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setFormStatus("Submitting...");
  //   const { name, email, message } = e.target.elements;
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   console.log(conFom);
  //   // Ajoutez ici votre logique supplémentaire après la soumission du formulaire

  //   // Réinitialiser les champs du formulaire
  //   e.target.reset();

  //   // Afficher un message de succès ou effectuer d'autres actions
  //   // ...

  //   // Mettre à jour l'état du formulaire
  //   setFormStatus("Send");
  // };

  // useEffect(() => {});
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
            <h3>Laissez moi un message !</h3>
          </div>
          <hr className="border-title" />
          <li>
            Email
            <a href="">contact.ecara@gmail.com</a>
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
              </a>
              <a href="https://www.linkedin.com/in/e-cara">
                <Linkedin />
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
              <img src={Logo} width={55} alt="Logo" />
            </div>
            <div className="contact__contenu__content__form--control">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                required
                autoComplete="off"
              />
            </div>
            <div className="contact__contenu__content__form--control">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                required
                autoComplete="off"
              />
            </div>
            <div className="contact__contenu__content__form--control">
              <textarea
                className="form-control"
                placeholder="Message"
                name="message"
                required
              />
            </div>
            <button
              className="contact__contenu__content__form--button"
              type="submit"
            >
              Envoyer
              <img src={Arrow} alt="Flèche" />
            </button>
          </form>
        </div>
      </div>
      <div className="contact__button">
        <a
          href="https://elodiecara.github.io/cv-ecara/"
          className="contact__button__dl"
        >
          <span>Télécharger mon CV</span>
        </a>
      </div>
    </section>
  );
};
export default ContactForm;
