import "./CardContainer.sass";
import Card from "../Card/Card";
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
  const scrollRight = () => scroll < arrayLength - 1 && setScroll(+scroll + 1);
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
        <div className="empty_cards_data">
          {redux_user.loginned ? "This category is empty, add words :)" : "This feature close for you, log in firstly"}
        </div>
      )}
    </div>
  );
};

export default CardContainer;
