import "./AddWord.css";
import ClickAwayListener from "react-click-away-listener";

const AddWord = ({ setShowModal }) => {
  return (
    <ClickAwayListener onClickAway={() => setShowModal({ status: false })}>
      <div className="AddWord">
        <div className="AddWordHeader">
          Add Word
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            English
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Translate
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button type="button" class="btn btn-primary btn-lg">Add word</button>
      </div>
    </ClickAwayListener>
  );
};

export default AddWord;
