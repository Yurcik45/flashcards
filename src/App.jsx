import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import CardContainer from "./Components/CardContainer/CardContainer";
import "./App.css";
import List from "./Components/List/List";
import Home from "./Pages/Home/Home";

const App = () => {
  const [cardsData, setCardData] = useState(null);
  const [userName, setUserName] = useState('')
  const [showModal, setShowModal] = useState(false);
  const getcardsData = async () => {
    try {
      let base = await axios.get("cards.json", { crossDomain: true });
      setCardData(base.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const name = localStorage.getItem('name');
    console.log('ls name :', name);
    if (name) setUserName(name)
      else setShowModal(true, {type: 'name'});
      console.log('modal state :', showModal);
    getcardsData().then(() => console.log());
  }, []);
  console.log('user name :', userName);
  return (
    <div className="App">
      <Home
        cardsData={cardsData}
        userName={userName}
        setUserName={setUserName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default App;
