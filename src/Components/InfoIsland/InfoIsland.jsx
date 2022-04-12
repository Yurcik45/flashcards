import "./InfoIsland.sass";
import left_arrow_button from "../../assets/images/hint/left_arrow_button.svg";
import n_button from "../../assets/images/hint/n_button.svg";
import p_button from "../../assets/images/hint/p_button.svg";
import right_arrow_button from "../../assets/images/hint/right_arrow_button.svg";
import space_button from "../../assets/images/hint/space_button.svg";

const InfoIsland = () => {
  const hintTitle = (
    <>
      <p>SOME HINTS:</p>
      <p>
        press <img className="hint_img" src={space_button} /> (space) to show translate
      </p>
      <p>
        press <img className="hint_img" src={left_arrow_button} /> or{" "}
        <img className="hint_img" src={p_button} /> to show prev word
      </p>
      <p>
        press <img className="hint_img" src={right_arrow_button} /> or{" "}
        <img className="hint_img" src={n_button} /> to show next word
      </p>
    </>
  );
  return (
    <div className="InfoIsland">
      i<span className="info_body">{hintTitle}</span>
    </div>
  );
};

export default InfoIsland;
