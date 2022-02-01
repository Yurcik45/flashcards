// import { useState } from 'react';
import AddName from "../AddName/AddName";
import AddWord from "../AddWord/AddWord";
import "./ModalContainer.css";

const ModalContainer = ({ showModal, setShowModal, setUserName }) => {
  return (
    <div className="ModalContainer">
      {
        showModal.item === 'name' &&
        <AddName
          setShowModal={setShowModal}
          setUserName={setUserName}
        />
      }
        {
        showModal.item === 'word' &&
        <AddWord setShowModal={setShowModal} />
      }
    </div>
  );
};

export default ModalContainer;
