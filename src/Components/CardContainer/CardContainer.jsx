import "./CardContainer.sass";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CardContainer = ({ currentCategory, scroll, setScroll }) => {
  const redux_words = useSelector((state) => state.words);
  const redux_user = useSelector((state) => state.user);
  const words =
    currentCategory === "generalWords"
      ? redux_words[currentCategory]
      : redux_user[currentCategory];
  const arrayLength = words && words.length;
  const scrollLeft = () => scroll > 0 && setScroll(+scroll - 1);
  // change scroll value for user click Right
  const scrollRight = () => scroll < arrayLength - 1 && setScroll(+scroll + 1);
  console.log("scroll", scroll);
  return (
    <div className="CardContainer">
      {words.length > 0 ? (
        <>
          <button className="scrollButton" onClick={scrollLeft}>
            prev
          </button>
          <Card
            original={words[scroll].original}
            translate={words[scroll].translate}
          />
          <button className="scrollButton" onClick={scrollRight}>
            next
          </button>
        </>
      ) : (
        <div className="empty_cards_data">This category is empty</div>
      )}
    </div>
  );
};

export default CardContainer;
