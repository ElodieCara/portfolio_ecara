// import { UilBracketsCurly } from "@iconscout/react-unicons";
import { skills } from "../../data/data.js";

const title = "Compétences";

const Skills = () => {
  const card = skills;

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
                <img src={card.logos} alt="Sass" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
