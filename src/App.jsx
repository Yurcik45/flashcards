import { useState, useEffect, useMemo, useLayoutEffect } from "react";
import "./App.sass";
import { useDispatch } from "react-redux";
import { getCategoryWords } from "./redux/actions/words";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Register from "./Pages/Register/Register";
import Notifications from "./Components/Notifications/Notifications";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const [cardsData, setCardData] = useState(null);
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [notifiaction, setNotification] = useState({ active: false });
  const [authData] = useState({});
  const [registerData] = useState({});
  let [notiftimeout] = useState(null);
  const [categories] = useState([
    { name: "all", db_name: "all_words", active: true },
    { name: "know", db_name: "known_words", active: false },
    { name: "unknow", db_name: "unknown_words", active: false },
    { name: "my", db_name: "own_words", active: false },
  ]);
  // const getcardsData = async () => {
  //   try {
  //     let base = await axios.get("cards.json", { crossDomain: true });
  //     setCardData(base.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const notificationHandler = (text, type) => {
    if (notiftimeout !== null)
      notiftimeout.clearTimeout() && console.warn("CLEARED");
    setNotification({ active: true, text, type });
    notiftimeout = setTimeout(() => {
      setNotification({ active: false });
    }, 3000);
  };

  const location = useLocation();
  let current_location = location.pathname;

  useEffect(() => {
    current_location = location.pathname;
  }, [location]);

  return (
    <div className="App">
      {current_location === "/" && <Navbar />}
      <Routes>
        <Route
          exact
          path="/"
          element={
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
          }
        />
        <Route
          path="/auth"
          element={
            <Auth
              authData={authData}
              notificationHandler={notificationHandler}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              registerData={registerData}
              notificationHandler={notificationHandler}
            />
          }
        />
      </Routes>

      {notifiaction.active && (
        <Notifications text={notifiaction.text} type={notifiaction.type} />
      )}
    </div>
  );
};

export default App;
