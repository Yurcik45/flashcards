import "./Card.sass";

const Card = ({ original, translate }) => {
  return (
    <div className="Card">
      <div className="CardItem">
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
