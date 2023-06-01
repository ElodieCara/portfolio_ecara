import { dataWorks } from "@/data/data.js";

const Works = () => {
  const title = "Portfolio";
  return (
    <section className="works" id="works">
      <div className="works__container">
        <div className="works__container__title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="works__content">
        {/* =============Works--Formation================= */}
        <article
          className="works__projects--formation"
          id="
        formation"
        >
          {dataWorks.map((item, index) => (
            <div className="works__card" key={index}>
              <div className="works__card__date">{item.date}</div>
              <div className="works__card__img">
                <img
                  src={item.image}
                  alt={item.title}
                  //   width={280}
                  //   height={280}
                />
              </div>
              <div className="works__card__body">
                <h3 className="works__card__body__title">{item.title}</h3>
                <p className="works__card__body__text">{item.description}</p>
                <button>More</button>
              </div>
            </div>
          ))}
        </article>

        {/* =============Works--Personnels================= */}
        <article className="works__projects--personnels" id="personnels">
          <div className="projects__card">
            <div className="works__card__img">
              <img src="" alt="" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Works;
