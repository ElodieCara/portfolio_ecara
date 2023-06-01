import { dataSkills } from "@/data/data.js";

const Skills = () => {
  const title = "Compétences";
  // cards file
  const card = dataSkills;

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__container__title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="skills__content">
        {card.map((item, index) => (
          <div className="skills__card" key={index}>
            <div className="skills__card__img">
              <img src={item.image} alt="" height={80} width={30} />
            </div>
            <div className="skills__card__body">
              <h3 className="skills__card__body__title">{item.title}</h3>
              <p className="skills__card__body__text">{item.description}</p>
              <div className="skills__card__body__logos">
                {item.logos.map((logo, index) => (
                  <img
                    src={logo.url}
                    key={index}
                    alt=""
                    height={20}
                    width={20}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
