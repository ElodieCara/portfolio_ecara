import React from "react";
import Logo from "@/assets/&.png";
import Arrow from "@/assets/Arrow 5.png";

const ContactForm = () => {
  const title = "Contact";
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__container__title">
          <h1>{title}</h1>
          <hr className="border-title" />
        </div>
      </div>
      <div className="contact__title">
        <h3>Contactez-moi !</h3>
      </div>
      <div className="contact__content">
        <form
          className="contact__content__form"
          onSubmit={onSubmit}
          method="POST"
          action="https://getform.io/f/a923b466-7e11-4a57-be86-367f9d312768"
        >
          <div className="contact__content__form--icon">
            <img src={Logo} width={30} alt="" />
          </div>
          <div className="contact__content__form--control">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              id="name"
              required
            />
          </div>
          <div className="contact__content__form--control">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className="contact__content__form--control">
            <textarea
              className="form-control"
              placeholder="Message"
              id="message"
              required
            />
          </div>
          <button className="contact__content__form--button" type="submit">
            {formStatus}
            <img src={Arrow} alt="Flèche" />
          </button>
        </form>
      </div>
      <div className="contact__button">
        <a href="https://elodiecara.github.io/CV/">
          <button className="contact__button__dl">Télécharger mon CV</button>
        </a>
      </div>
    </section>
  );
};
export default ContactForm;
