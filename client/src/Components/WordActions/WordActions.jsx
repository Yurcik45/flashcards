import { useDispatch } from "react-redux";
import "./WordActions.sass";
import { addWordAction, changeWord, getUser } from "../../redux/actions/user";
import { useSelector } from "react-redux";
import { wordActionButtons } from "./WordActionbuttons";

const WordActions = ({
  currentWord,
  notificationHandler,
  setShowModal,
  currentCategory,
  scrollRight,
}) => {
  const dispatch = useDispatch();
  const category = localStorage.getItem("category");
  const user = useSelector((state) => state.user);
  const login = user.login;
  const knownWords = user.knownWords;
  const unknownWords = user.unknownWords;
  const changedWords = user.changedWords;
  const newWords = user.newWords;
  const redux_words = useSelector((state) => state.words);

  const callWordAction = (action) => {
    const addWordConditions = (addedListArr, list) => {
      const findSame = addedListArr.filter(
        (kn) => kn.original === currentWord.original
      );
      if (findSame.length > 0)
        return notificationHandler(
          `"${currentWord.original}" already exist in ${list}`,
          "warning"
        );
      addWordAction(login, currentWord, list, (res) => {
        if (res.data.code === 1)
          return notificationHandler(res.data.msg, "danger");
        dispatch(getUser(login));
        currentCategory === "generalWords" && scrollRight(arrayLength)
        notificationHandler(res.data.msg, "success")
      });
    };

    const words =
      currentCategory === "generalWords"
        ? redux_words[currentCategory]
        : user[currentCategory];
    const arrayLength = words && words.length;
    switch (action) {
      case "add_to_known":
        addWordConditions(knownWords, "knownWords");
        break;
      case "add_to_unknown":
        addWordConditions(unknownWords, "unknownWords");
        break;
      // case "add_to_changed":
      //   const oldChangedWords = changedWords.map((ch) => ch.old);
      //   addWordConditions(oldChangedWords, "changedWords");
      //   break;
      // case "add_to_new":
      //   addWordConditions(newWords, "newWords");
      //   break;
      default:
        break;
    }
  };
  return (
    <div className="WordActions">
      {wordActionButtons(category).map((btn, id) => {
        return (
          btn.condition && (
            <button
              key={id}
              onClick={() => callWordAction(btn.clickAction)}
              type="button"
              className={`btn nav_button ${btn.class}`}
            >
              {btn.text}
            </button>
          )
        );
      })}
    </div>
  );
};

export default WordActions;
