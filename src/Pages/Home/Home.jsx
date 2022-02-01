import "./Home.css";
import axios from "axios";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import List from "../../Components/List/List";
import CardContainer from "../../Components/CardContainer/CardContainer";
import ModalContainer from "../../Components/ModalContainer/ModalContainer";
import CategoryNav from "../../Components/CategoryNav/CategoryNav";

const Home = ({ cardsData, userName, setUserName, showModal, setShowModal, categories, currentCategory, setCurrentCategory }) => {
  return (
    <div className="Home">
      <Header
        userName={userName}
        setShowModal={setShowModal}
      />
      <CategoryNav userName={userName} setCurrentCategory={setCurrentCategory} categories={categories} currentCategory={currentCategory} />
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
