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
import { s_user } from "../../initialize";
import WordActions from "../../Components/WordActions/WordActions";

const Home = ({ currentCategory, notificationHandler, scroll, setScroll }) => {
  const dispatch = useDispatch();
  const loginned = useSelector((state) => state.user.loginned);
  const [viewWordsList, setViewWordsList] = useState(false);
  const [showModal, setShowModal] = useState({status: false, type: 'add'});
  const [currentWord, setCurrentWord] = useState();
  useEffect(() => {
    if (s_user) {
      dispatch(getUser(s_user));
      dispatch(getAllWords());
    } else {
      dispatch(getAllWords(30));
    }
  }, [s_user]);

  return (
    <div className="Home">
      <CardContainer
        currentCategory={currentCategory}
        scroll={scroll}
        setScroll={setScroll}
        setCurrentWord={setCurrentWord}
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
