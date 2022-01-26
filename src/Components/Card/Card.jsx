import "./Card.sass";

const Card = ({ original, translate }) => {
  return (
    <div className="Card">
      <div className="CardItem">
        <div className="CardItemFront">{original}</div>
        <div className="CardItemBack">{translate}</div>
      </div>
    </div>
  );
};

export default Card;
