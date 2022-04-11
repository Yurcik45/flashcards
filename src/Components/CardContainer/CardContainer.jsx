import "./CardContainer.sass";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CardContainer = ({
  currentCategory,
  scroll,
  setScroll,
  setCurrentWord,
  cardItemFont,
}) => {
  const redux_words = useSelector((state) => state.words);
  const redux_user = useSelector((state) => state.user);
  const words =
    currentCategory === "generalWords"
      ? redux_words[currentCategory]
      : redux_user[currentCategory];
  const arrayLength = words && words.length;
  const scrollLeft = () => scroll > 0 && setScroll(+scroll - 1);
  const scrollRight = () => scroll < arrayLength - 1 && setScroll(+scroll + 1);
  useEffect(() => {
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
    <button className="scrollButton" onClick={scrollRight}>
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
            />
            {nextButton}
          </>
        ) : (
          <>
            <Card
              original={words[scroll].original}
              translate={words[scroll].translate}
              cardItemFont={cardItemFont}
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
