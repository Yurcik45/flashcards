import "./CardContainer.sass";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMemo } from "react";

const CardContainer = ({
  currentCategory,
  scroll,
  setScroll,
  setCurrentWord,
  cardItemFont,
  scrollLeft,
  scrollRight,
}) => {
  const redux_words = useSelector((state) => state.words);
  const redux_user = useSelector((state) => state.user);
  const words =
    currentCategory === "generalWords"
      ? redux_words[currentCategory]
      : redux_user[currentCategory];
  const arrayLength = words && words.length;

  useEffect(() => {
    const category = localStorage.getItem("category") ?? "generalWords";
    category === "generalWords" && localStorage.setItem("generalCount", scroll);
    setCurrentWord({
      original: words[scroll]?.original && words[scroll].original,
      translate: words[scroll]?.original && words[scroll].translate,
    });
  }, [scroll, words]);

  const prevButton = (
    <button className="scrollButton" onClick={scrollLeft}>
      prev
    </button>
  );
  const nextButton = (
    <button className="scrollButton" onClick={() => scrollRight(arrayLength)}>
      next
    </button>
  );
  const unloginnedArea = (
    <div className="empty_cards_data">
      {redux_user.loginned
        ? "This category is empty, add words :)"
        : "This feature close for you, log in firstly"}
    </div>
  );
  const [showTranslate, setShowTranslate] = useState(false);
  const translateStatus = () => setShowTranslate(!showTranslate);
  useEffect(() => {
    const listener = (event) => {
      switch (event.keyCode) {
        case 32:
          translateStatus();
          break;
        case 37:
          scrollLeft();
          break;
        case 39:
          scrollRight();
          break;
        case 80:
          scrollLeft();
          break;
        case 78:
          scrollRight();
          break;
      }
    };
    window.addEventListener("keyup", listener);
    return () => window.removeEventListener("keyup", listener);
  });
  return (
    <div className="CardContainer">
      {words.length > 0 ? (
        window.innerWidth > 1200 ? (
          <>
            {prevButton}
            <Card
              original={words[scroll].original}
              translate={words[scroll].translate}
              cardItemFont={cardItemFont}
              showTranslate={showTranslate}
              translateStatus={translateStatus}
            />
            {nextButton}
          </>
        ) : (
          <>
            <Card
              original={words[scroll].original}
              translate={words[scroll].translate}
              cardItemFont={cardItemFont}
              showTranslate={showTranslate}
              translateStatus={translateStatus}
            />
            <div className="arrowsMobile">
              {prevButton}
              {nextButton}
            </div>
          </>
        )
      ) : (
        unloginnedArea
      )}
    </div>
  );
};

export default CardContainer;
