import "./Home.sass";
import axios from "axios";
import { useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import ModalContainer from "../../Components/ModalContainer/ModalContainer";
import WordsList from "../../Components/WordsList/WordsList";

const Home = ({ cardsData }) => {
  const [viewWordsList, setViewWordsList] = useState(false);
  const temp = [
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefgregrefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefregregregwfef",
    "fwefefwfef",
    "efefwfef",
    "fwefefwfef",
    "fwefregregregreggrgregefwfef",
    "fwefefwfef",
    "fweefwfef",
    "ffef",
    "fwefefwfef",
    "fwefefwfef",
    "fefwfef",
    "fwgreefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fefwfef",
    "fwefefwfef",
    "wefefwfef",
    "fwefefwfef",
    "fwefewf",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefregregrgregrgefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefgregegrgeggrgregefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fweggrggegrgfefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
    "fwefefwfef",
  ];
  return (
    <div className="Home">
      <CardContainer cardsData={cardsData} />
      <WordsList
        words={temp}
        current_word={temp[12]}
        viewWordsList={viewWordsList}
        setViewWordsList={setViewWordsList}
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
