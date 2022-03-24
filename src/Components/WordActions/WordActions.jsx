import { useDispatch } from "react-redux";
import "./WordActions.sass";
import {
  addKnownWord,
  addUnknownWord,
  changeWord,
  deleteWord,
  getUser,
} from "../../redux/actions/user";
import { useSelector } from "react-redux";

const WordActions = ({ currentWord, notificationHandler }) => {
  const dispatch = useDispatch();
  let category = localStorage.getItem("category");
  const login = useSelector(state => state.user.login);
  // console.log("currentWord :", currentWord);
  const wordAction = (type, word, changed = "") => {
    switch (type) {
      case "know":
        dispatch(addKnownWord(login, currentWord, (res) => {
          dispatch(getUser({login}))
          console.log('add kn res', res);
          const code = res.data.code;
          const msg = res.data.msg;
          if (code === 1) return notificationHandler(msg, 'warning')
          return notificationHandler(res.data.msg, 'success')
        }))
        break;
      case "unknow":
        dispatch(addUnknownWord(login, currentWord, (res) => {
          dispatch(getUser({login}))
          console.log('add unk res', res);
          const code = res.data.code;
          const msg = res.data.msg;
          if (code === 1) return notificationHandler(msg, 'warning')
          return notificationHandler(res.data.msg, 'success')
        }))
        break;
      case "change":
        console.log("change");
        // action to change ["word 1 --> new_word 1", "word 2 --> new_word 2"]
        break;
      case "new":
        console.log("new");
        // action to add user new list
        break;
      case "delete":
        console.log("delete");
        // action to delete from current list
        break;
      default:
        break;
    }
  };
  return (
    <div className="WordActions">
      {(category === "generalWords" || category === "unknownWords") && (
        <button
          onClick={() => wordAction("know")}
          type="button"
          className="btn nav_button btn-outline-success"
        >
          I know this word :)
        </button>
      )}
      {(category == "generalWords" || category === "knownWords") && (
        <button
          onClick={() => wordAction("unknow")}
          type="button"
          className="btn nav_button btn-outline-primary"
        >
          Must be repeated
        </button>
      )}
      {category !== "newWords" && category !== "changedWords" && (
        <button
          onClick={() => wordAction("change")}
          type="button"
          className="btn nav_button btn-outline-warning"
        >
          I see the mistake
        </button>
      )}
      {category === "generalWords" && (
        <button
          onClick={() => wordAction("new")}
          type="button"
          className="btn nav_button btn-outline-dark"
        >
          Add new word
        </button>
      )}
      {category !== "generalWords" && (
        <button
          onClick={() => wordAction("delete")}
          type="button"
          className="btn nav_button btn-outline-danger"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default WordActions;
