import React from "react";

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
        </div>
      </div>

      <div className="contact__content">
        <h3 className="mb-3">Contactez-moi !</h3>
        <form
          className="contact__content__form"
          onSubmit={onSubmit}
          method="POST"
          action="https://getform.io/f/a923b466-7e11-4a57-be86-367f9d312768"
        >
          <div className="contact__content__form--name">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="contact__content__form--email">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="contact__content__form--message">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="contact__content__form--button" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
