import "./Card.sass";

const Card = ({
  original,
  translate,
  cardItemFont,
  showTranslate,
  translateStatus,
}) => {
  return (
    <div className="Card" onClick={translateStatus}>
      <div
        className="CardItem"
        style={{
          fontSize: `${cardItemFont}vmin`,
          transform: `rotateY(${showTranslate ? "180deg" : "0"})`,
        }}
      >
        <div className="CardItemFront">
          <div className="textBody">{original}</div>
        </div>
        <div className="CardItemBack">
          <div className="textBody">{translate}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
