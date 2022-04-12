// import { useState } from 'react';
import "./ModalContainer.sass";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ModalContainer = ({ showModal, setShowModal, notificationHandler }) => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  const addedWord = {};
  const addWord = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    addedWord[name] = value;
    console.log({ addedWord });
  };
  const changedData = { old: {}, new: {} };
  const changeWord = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    changedData["old"] = {
      original: showModal.item.original,
      translate: showModal.item.translate,
    };
    changedData.new[name] = value;
  };
  const submit = () => {
    setShowModal({status: false})
    // dispatch(
    //   sendWord(
    //     login,
    //     (showModal.type === "add" && addedWord) ||
    //       (showModal.type === "change" && changedData),
    //     showModal.type,
    //     (res) => {
    //       console.log('ADD RESPONSE', res);
    //       if (res.data.code === 0) return notificationHandler(res.data.msg, 'success');
    //       return notificationHandler('uknown error', 'danger')
    //     }
    //   )
    // );
  };
  const AddWord = (
    <div className="col-md-6 col-xs-12 col-sm-12 login_form ">
      <input
        onChange={addWord}
        name="original"
        className="form__input"
        placeholder="Original"
      />
      <input
        onChange={addWord}
        name="translate"
        className="form__input"
        placeholder="Translate"
      />
      <div onClick={submit} class="btn modal_btn">
        Add word
      </div>
    </div>
  );
  const ChangeWord = (
    <div className="col-md-6 col-xs-12 col-sm-12 login_form ">
      <input
        name="username"
        className="form__input"
        value={showModal?.item?.original ?? ""}
        disabled
      />
      <input
        name="username"
        className="form__input"
        value={showModal?.item?.translate ?? ""}
        disabled
      />
      <input
        name="original"
        className="form__input"
        onChange={changeWord}
        placeholder={showModal?.item?.original ?? ""}
      />
      <input
        name="translate"
        className="form__input"
        onChange={changeWord}
        placeholder={showModal?.item?.translate ?? ""}
      />
      <div onClick={submit} class="btn modal_btn">
        Change word
      </div>
    </div>
  );
  return (
    <div className="ModalContainer">
      <div className="modal_close_hint">Click away to close</div>
      <ClickAwayListener onClickAway={() => setShowModal({ status: false })}>
        {(showModal.type === "change" && ChangeWord) ||
          (showModal.type === "add" && AddWord)}
      </ClickAwayListener>
    </div>
  );
};

export default ModalContainer;
