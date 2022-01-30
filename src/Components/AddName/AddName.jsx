import "./AddName.css";
import ClickAwayListener from "react-click-away-listener";
import { useState } from "react";

const AddName = ({ setShowModal, setUserName }) => {
  const [name, setName] = useState('');
  const writeName = (e) => {
    const value = e.target.value;
    setName(value)
  }
  const addName = () => {
    const empty = name.trim().length === 0 ? true : false;
    const emptyName = 'Ти такий пустий як і твоє ім\'я';
    setUserName(empty ? emptyName : name);
    localStorage.setItem('name', empty ? emptyName : name);
    setShowModal({status: false});
  };
  return (
    <ClickAwayListener onClickAway={() => setShowModal({status: false})}>
      <div className="AddName">
        <div className="input-group">
          <input
            onChange={writeName}
            type="text"
            className="form-control"
            placeholder="Write your name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={addName}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            ok
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default AddName;
