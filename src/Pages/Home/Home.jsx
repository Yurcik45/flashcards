import "./Home.css";
import axios from "axios";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import List from "../../Components/List/List";
import CardContainer from "../../Components/CardContainer/CardContainer";
import ModalContainer from "../../Components/ModalContainer/ModalContainer";

const Home = ({ cardsData, userName, setUserName, showModal, setShowModal }) => {
  return (
    <div className="Home">
      <Header
        userName={userName}
        setShowModal={setShowModal}
      />
      <CardContainer cardsData={cardsData} />
      {/* <List /> */}
      <div onClick={() => setShowModal({status: true, item: 'word'})} className="openmodal">
        add word
      </div>
      <div onClick={() => setShowModal({status: true, item: 'name'})} className="openmodal">
        add name
      </div>
      {showModal.status && (
        <ModalContainer
          showModal={showModal}
          setShowModal={setShowModal}
          setUserName={setUserName}
        />
      )}
    </div>
  );
};

export default Home;
