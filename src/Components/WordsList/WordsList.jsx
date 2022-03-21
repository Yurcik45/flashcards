import WordsArea from "../WordsArea/WordsArea";
import "./WordsList.sass";
import ClickAwayListener from "react-click-away-listener";
import { useSelector } from "react-redux";

const WordsList = ({
  currentCategory,
  viewWordsList,
  setViewWordsList,
  scroll,
  setScroll,
  notificationHandler,
  currentWord,
  setCurrentWord,
}) => {
  const redux_words = useSelector((state) => state.words);
  const redux_user = useSelector((state) => state.user);
  const words =
    currentCategory === "generalWords"
      ? redux_words[currentCategory]
      : redux_user[currentCategory];
  const wordsLength = words.length;
  const screenWidth = window.innerWidth;
  const choseListSize = () => {
    if (wordsLength <= 10) {
      return {
        width: 325,
      };
    }
    if (wordsLength <= 20) {
      return {
        width: screenWidth >= 800 ? 645 : 325,
      };
    }
    if (wordsLength <= 30) {
      return {
        width: screenWidth >= 1200 ? 965 : screenWidth >= 800 ? 645 : 325,
      };
    }
    return null;
  };
  const openWordsArea = () => {
    if (words.length > 0) return setViewWordsList(true);
    if (redux_user.login) {
      notificationHandler("list is empty", "warning");
    } else {
      notificationHandler("log in firstly", "warning");
    }
  };
  return (
    <div
      onClick={openWordsArea}
      className={`WordsList ${
        words && viewWordsList ? "fully_words_list" : "enpty_words_list"
      }`}
      style={{
        width:
          words &&
          viewWordsList &&
          choseListSize() !== null &&
          choseListSize().width,
      }}
    >
      {words && viewWordsList ? (
        <ClickAwayListener onClickAway={() => setViewWordsList(false)}>
          <WordsArea
            words={words}
            current_word={words[scroll]}
            setScroll={setScroll}
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
          />
        </ClickAwayListener>
      ) : (
        "Words List"
      )}
    </div>
  );
};

export default WordsList;
