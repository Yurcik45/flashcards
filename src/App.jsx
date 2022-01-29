import { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "./Components/CardContainer/CardContainer";
import "./App.css";
import List from "./Components/List/List";
import Home from "./Pages/Home/Home";

const App = () => {
  const [cardsData, setCardData] = useState(null);
  const getcardsData = async () => {
    try {
      let base = await axios.get("cards.json", { crossDomain: true });
      setCardData(base.data);
    } catch (e) {
      console.log(e);
    }
  };
  // const DBSetter = (path, value) => {
  //   firebase.database().ref(path).set(value)
  //       .then(r => dbRefreshHandler(Math.random()));
  // };
  useEffect(() => {
    getcardsData().then(() => console.log());
  }, []);
  // const [data, dataHandler] = useState(0);
  // const [dbRefresh, dbRefreshHandler] = useState(0);

  // useEffect(() => {
  //   // console.log('fetch worked')
  //   // fetch("https://flashcards-f6c98-default-rtdb.firebaseio.com/.json")
  //   //   .then((response) => response.json())
  //   //   .then((json) => {
  //   //     dataHandler(json);
  //   //   });
  //   // axios.get("https://flashcards-f6c98-default-rtdb.firebaseio.com/.json")
  //     // .then(res => dataHandler(res.data));
  //     console.log('username', localStorage.getItem('name'))
  //   }, []);
  // console.log('fb data', data);
  return (
    <div className="App">
      <Home cardsData={cardsData} />
    </div>
  );
};

export default App;
