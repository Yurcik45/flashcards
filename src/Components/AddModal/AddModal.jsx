import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import './AddModal.css';

const AddModal = ({showModal, setShowModal, closeModal}) => {
  console.log('modal :', showModal);
  return (
    <div className="AddModal">
      <ClickAwayListener onClickAway={closeModal}>
        <div className="ModalContainer">
          Add words
          <input type="text" name='original' />
          <input type="text" name='translate' />
        </div>
      </ClickAwayListener>
    </div>
  )
};

export default AddModal;