import "./CardContainer.css";
import Card from "../Card/Card";
import { useState } from "react";

const CardContainer = ({ cardsData }) => {
  const [scroll, setScroll] = useState(0);
  const arrayLength = cardsData?.flashcards && cardsData.flashcards.length;
  const scrollLeft = () => {
    if (scroll > 0) {
      setScroll(scroll - 1);
    }
  };
  // change scroll value for user click Right
  const scrollRight = () => {
    if (scroll < arrayLength - 1) {
      setScroll(scroll + 1);
    }
  };
  return (
    <div className="CardContainer">
      <button className="scrollButton" onClick={scrollLeft}>
        prev
      </button>
      {cardsData?.flashcards && (
        <Card
          original={cardsData.flashcards[scroll].original}
          translate={cardsData.flashcards[scroll].translate}
        />
      )}
      <button className="scrollButton" onClick={scrollRight}>
        next
      </button>
    </div>
  );
};

export default CardContainer;
