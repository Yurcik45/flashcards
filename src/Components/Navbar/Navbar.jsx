import "./Navbar.sass";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const temp = ["known_words", "unknown_words", "changed_words", "new_words"];
  const [activeCategory, setActiveCategory] = useState("main");
  const changeCategory = (e) => {
    const category = e.target.name;
    activeCategory !== category && setActiveCategory(category);
  };
  // navbar-dark bg-dark
  return (
    <nav className="Navbar navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Flashcards</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li
            onClick={changeCategory}
            className={`nav-item ${
              activeCategory === "main" && "activeNavLink"
            }`}
          >
            <a className="nav-link" name="main">
              Main
            </a>
          </li>
          {temp.map((item, id) => {
            return (
              <li
                key={id}
                className={`nav-item ${
                  activeCategory === item && "activeNavLink"
                }`}
                onClick={changeCategory}
              >
                <a className="nav-link" name={item}>
                  {(item === "known_words" && "Known") ||
                    (item === "unknown_words" && "Unknown") ||
                    (item === "changed_words" && "Changed") ||
                    (item === "new_words" && "Your")}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav_button_container">
        <NavLink to="/register">
          <button type="button" className="btn btn-primary">
            Sign in
          </button>
        </NavLink>
        <NavLink to="/auth">
          <button type="button" className="btn btn-success">
            Log in
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
