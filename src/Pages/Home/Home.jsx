import "./Home.sass";
import axios from "axios";
import { useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import ModalContainer from "../../Components/ModalContainer/ModalContainer";
import WordsList from "../../Components/WordsList/WordsList";
import { useDispatch } from "react-redux";
import { getAllWords } from "../../redux/actions/words";
import { getUser } from "../../redux/actions/user";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = ({ currentCategory, notificationHandler }) => {
  const dispatch = useDispatch();
  const [viewWordsList, setViewWordsList] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [currentWord, setCurrentWord] = useState();
  const user = useSelector((state) => state.user);
  const words = useSelector((state) => state.words);
  const loginned = user.loginned;
  useEffect(() => {
    // if (loginned)
    //   dispatch(getUser({ login: user.login }));
    //   dispatch(getAllWords(100));
    // if (!loginned)
    dispatch(getAllWords());
  }, []);
  return (
    <div className="Home">
      <CardContainer
        currentCategory={currentCategory}
        scroll={scroll}
        setScroll={setScroll}
      />
      <WordsList
        currentCategory={currentCategory}
        scroll={scroll}
        setScroll={setScroll}
        viewWordsList={viewWordsList}
        setViewWordsList={setViewWordsList}
        notificationHandler={notificationHandler}
      />
      {/* {showModal.status && (
        <ModalContainer
          showModal={showModal}
          setShowModal={setShowModal}
          setUserName={setUserName}
        />
      )} */}
    </div>
  );
};

export default Home;
