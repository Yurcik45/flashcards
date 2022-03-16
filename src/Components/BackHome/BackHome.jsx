import "./BackHome.sass";
import go_back from "../../assets/images/general/go_back_arrow_3.svg";
import { NavLink } from "react-router-dom";

const BackHome = () => {
  return (
    <NavLink to="/" className="BackHome">
      <div className="back_arrow">
        <img src={go_back} alt="back" />
      </div>
      <div className="back_text">go home</div>
    </NavLink>
  );
};

export default BackHome;
