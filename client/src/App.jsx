import { useState, useEffect } from "react";
import "./App.sass";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth";
import Register from "./Pages/Register";
import Notifications from "./Components/Notifications/Notifications";
import Navbar from "./Components/Navbar/Navbar";
import { init_categories, init_current_categ } from "./initialize";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState(init_current_categ());
  const [notifiaction, setNotification] = useState({ active: false });
  const [authData] = useState({});
  const [scroll, setScroll] = useState(
    currentCategory === "generalWords"
      ? +localStorage.getItem("generalCount") ?? 0
      : 0
  );
  const [registerData] = useState({});
  const [categories] = useState(init_categories);

  const notificationHandler = (text, type) => {
    setNotification({ active: true, text, type });
    setTimeout(() => {
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
      {current_location === "/" && (
        <Navbar
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          setScroll={setScroll}
        />
      )}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              currentCategory={currentCategory}
              notificationHandler={notificationHandler}
              scroll={scroll}
              setScroll={setScroll}
            />
          }
        />
        <Route
          path="/auth"
          element={
            <Auth
              authData={authData}
              notificationHandler={notificationHandler}
              type="auth"
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              registerData={registerData}
              notificationHandler={notificationHandler}
              type="register"
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
