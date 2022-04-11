import "./Home.sass";
import axios from "axios";
import { useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import ModalContainer from "../../Components/ModalContainer/ModalContainer";
import WordsList from "../../Components/WordsList/WordsList";
import { useDispatch, useSelector } from "react-redux";
import { getAllWords } from "../../redux/actions/words";
import { getUser } from "../../redux/actions/user";
import { useEffect } from "react";
import WordActions from "../../Components/WordActions/WordActions";
import FontRegular from "../../Components/FontRegular/FontRegular";

const Home = ({ currentCategory, notificationHandler, scroll, setScroll }) => {
  const dispatch = useDispatch();
  const loginned = useSelector((state) => state.user.loginned);
  const [viewWordsList, setViewWordsList] = useState(false);
  const [showModal, setShowModal] = useState({ status: false, type: "add" });
  const [currentWord, setCurrentWord] = useState();
  const local_card_font = +localStorage.getItem('local_card_font') ?? 2;
  console.log('local_card_font', local_card_font);
  const [cardItemFont, cardItemFontSet] = useState(local_card_font);
  const local_user = localStorage.getItem("user");
  useEffect(() => {
    if (local_user) {
      dispatch(getUser(local_user));
      dispatch(getAllWords());
    } else {
      dispatch(getAllWords(30));
    }
  }, [local_user]);

  return (
    <div className="Home">
      <CardContainer
        currentCategory={currentCategory}
        scroll={scroll}
        setScroll={setScroll}
        setCurrentWord={setCurrentWord}
        cardItemFont={cardItemFont}
      />
      <WordsList
        currentCategory={currentCategory}
        scroll={scroll}
        setScroll={setScroll}
        viewWordsList={viewWordsList}
        setViewWordsList={setViewWordsList}
        notificationHandler={notificationHandler}
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
      />
      <FontRegular
        cardItemFont={cardItemFont}
        cardItemFontSet={cardItemFontSet}
        notificationHandler={notificationHandler}
      />
      {loginned && (
        <WordActions
          currentWord={currentWord}
          notificationHandler={notificationHandler}
          setShowModal={setShowModal}
        />
      )}
      {/* {showModal.status && (
        <ModalContainer
          showModal={showModal}
          setShowModal={setShowModal}
          notificationHandler={notificationHandler}
        />
      )} */}
    </div>
  );
};

export default Home;
