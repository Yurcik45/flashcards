import "./CardContainer.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CardContainer = ({ cardsData }) => {
  const [fb_data, set_fb_data] = useState([])
  const [scroll, setScroll] = useState(0);
  const arrayLength = cardsData?.flashcards && cardsData.flashcards.length;
  const scrollLeft = () => {
    if (scroll > 0) {
      setScroll(scroll - 1);
    }
  };
  // change scroll value for user click Right
  const scrollRight = () => {
    if (scroll < arrayLength - 1) {
      setScroll(scroll + 1);
    }
  };
  const category = localStorage.getItem('category');
  const state = useSelector(state => state.words);
  useEffect(() => {
    state[category].length > 0 && set_fb_data(state[category])
    console.log('effect');
  }, [state])
  console.log('fb_data', fb_data[scroll]);
  console.log('test :', state);
  console.log('cards data', cardsData);
  return (
    <div className="CardContainer">
      <button className="scrollButton" onClick={scrollLeft}>
        prev
      </button>
      {/* {fb_data[scroll].original &&
        <Card
          original={fb_data[scroll].original}
          translate={fb_data[scroll].translate}
        />
      } */}
      {/* {cardsData?.flashcards &&
        <Card
          original={cardsData.flashcards[scroll].original}
          translate={cardsData.flashcards[scroll].translate}
        />
      } */}
      <button className="scrollButton" onClick={scrollRight}>
        next
      </button>
    </div>
  );
};

export default CardContainer;
