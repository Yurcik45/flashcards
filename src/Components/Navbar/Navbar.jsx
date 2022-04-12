import "./Navbar.sass";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLogOut } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

const Navbar = ({ categories, currentCategory, setCurrentCategory, setScroll }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const general_words_length = useSelector(state => state.words.generalWords).length + 1;
  const known_words_length = user.knownWords.length;
  const unknownWords = user.unknownWords.length;
  const loginned = user.loginned;
  const login = user.login;
  const changeCategory = (e) => {
    const category = e.target.name;
    if (category === 'generalWords') {
      const generalCount = +localStorage.getItem('generalCount') ?? 0;
      setScroll(generalCount);
    } else {
      setScroll(0)
    }
    if (currentCategory !== category) {
      setCurrentCategory(category);
      localStorage.setItem("category", category);
    }
  };
  const logOut = () => dispatch(userLogOut());
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
          {categories.map((item, id) => {
            return (
              <li
                key={id}
                className={`nav-item ${
                  currentCategory === item && "activeNavLink"
                }`}
                onClick={changeCategory}
              >
                <a className="nav-link" name={item}>
                  {(item === "generalWords" && `All (${general_words_length - 1})`) ||
                    (item === "knownWords" && `Known (${known_words_length})`) ||
                    (item === "unknownWords" && `Unknown (${unknownWords  })`) ||
                    (item === "changedWords" && "Changed") ||
                    (item === "newWords" && "Your")}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav_button_container">
        {
          loginned &&
          <div className="nav_user">
            {login}
          </div>
        }
        {!loginned && (
          <>
            <NavLink to="/register">
              <button type="button" className="btn btn-primary nav_button">
                Sign in
              </button>
            </NavLink>
            <NavLink to="/auth">
              <button type="button" className="btn btn-success nav_button">
                Log in
              </button>
            </NavLink>
          </>
        )}
        {loginned && (
          <NavLink to="/" onClick={logOut}>
            <button type="button" className="btn btn-danger nav_button">
              Log out
            </button>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
