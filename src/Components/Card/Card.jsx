import "./Card.sass";

const Card = ({ original, translate, cardItemFont }) => {
  return (
    <div className="Card">
      <div className="CardItem" style={{fontSize: `${cardItemFont}vmin`}}>
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
