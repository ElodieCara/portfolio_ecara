import FlipCard from "../../components/FlipCard/FlipCard";

const Skills = () => {
  const title = "Compétences";

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__container__title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="skills__content">
        <FlipCard />
      </div>
    </section>
  );
};

export default Skills;
