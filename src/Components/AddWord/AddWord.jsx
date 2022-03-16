import "./AddWord.sass";
import ClickAwayListener from "react-click-away-listener";
import { useState } from "react";

const AddWord = ({ setShowModal }) => {
  const [word] = useState({});
  const writeWord = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    word[name] = value;
  };
  const addWord = () => {
    if (word.original && word.translate) {
      if (
        word?.original.trim().length !== 0 &&
        word?.translate.trim().length !== 0
      ) {
        word.original = word.original.trim();
        word.translate = word.translate.trim();
      } else return alert("incorrect word");
    } else return alert("incorrect word");
  };
  return (
    <ClickAwayListener onClickAway={() => setShowModal({ status: false })}>
      <div className="AddWord">
        <div className="AddWordHeader">Add Word</div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            English
          </span>
          <input
            onChange={writeWord}
            type="text"
            name="original"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Translate
          </span>
          <input
            onChange={writeWord}
            type="text"
            name="translate"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button
          onClick={addWord}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Add word
        </button>
      </div>
    </ClickAwayListener>
  );
};

export default AddWord;
