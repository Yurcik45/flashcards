import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import CardContainer from "./Components/CardContainer/CardContainer";
import "./App.css";
import { useDispatch } from 'react-redux';
import { getCategoryWords } from './redux/actions/words';
import List from "./Components/List/List";
import Home from "./Pages/Home/Home";

const App = () => {
  const dispatch = useDispatch();
  const [cardsData, setCardData] = useState(null);
  const [userName, setUserName] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all')
  const [categories] = useState([
    {name: 'all', db_name: 'all_words', active: true},
    {name: 'know', db_name: 'known_words', active: false},
    {name: 'unknow', db_name: 'unknown_words', active: false},
    {name: 'my', db_name: 'own_words', active: false},
  ])
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
    if (name !== null && name !== undefined) {
      setUserName(name)
    } else {
      setShowModal({status: true, item: 'name'})
    }
    const category = localStorage.getItem('category');
    if (!category) {
      categories.forEach(c => c.active === true && localStorage.setItem('category', c.db_name))
      dispatch(getCategoryWords(name, 'all_words'))
    } else {
      dispatch(getCategoryWords(name, category))
    }
    // getcardsData().then(() => console.log());
    console.log('name', name);
  }, []);
  return (
    <div className="App">
      <Home
        cardsData={cardsData}
        userName={userName}
        setUserName={setUserName}
        showModal={showModal}
        setShowModal={setShowModal}
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </div>
  );
};

export default App;
