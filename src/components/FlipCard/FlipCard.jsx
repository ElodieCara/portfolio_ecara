import { useState } from "react";
import { dataSkills } from "@/data/data.js";

const FlipCard = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  const card = dataSkills;
  return (
    <div className="flip-card-container">
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
              <h2 className="card-front__body__title">{item.title}</h2>
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
            <div className="card-back__text">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
