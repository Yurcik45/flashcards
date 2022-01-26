import { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "./Components/CardContainer/CardContainer";
import "./App.sass";

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
  useEffect(() => {
    getcardsData().then(() => console.log());
  }, []);
  return (
    <div className="App">
      <CardContainer cardsData={cardsData} />
    </div>
  );
};

export default App;
