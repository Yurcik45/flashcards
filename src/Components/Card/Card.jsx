import "./Card.css";

const Card = ({ original, translate }) => {
  console.log('card :', original, translate);
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
