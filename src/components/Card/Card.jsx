import { useState } from "react";
import { dataSkills } from "@/data/data.js";

function Card() {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };
  const card = dataSkills;
  return (
    <>
      {card.map((item, index) => (
        <div
          className={`card ${flippedCards[index] ? "flipped" : ""}`}
          key={index}
          onClick={() => handleCardFlip(index)}
        >
          <div className="card-front">
            <div className="card-front__img">
              <img src={item.image} alt="" height={80} width={30} />
            </div>
            <div className="card-front__body">
              <h3 className="card-front__body__title">{item.title}</h3>
              <div className="card-front__body__logos">
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
          <div className="card-back">
            <p className="card-back__text">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
