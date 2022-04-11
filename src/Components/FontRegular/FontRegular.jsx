import './FontRegular.sass';

const FontRegular = ({cardItemFont, cardItemFontSet, notificationHandler}) => {
  const changeFont = op => {
    switch (op) {
      case '+': {
        if (cardItemFont > 8) return notificationHandler('too large font', 'info');
        localStorage.setItem('local_card_font', cardItemFont + 1)
        return cardItemFontSet(cardItemFont + 1);
      }
      case '-': {
        if (cardItemFont < 2) return notificationHandler('too small font', 'warning');
        localStorage.setItem('local_card_font', cardItemFont - 1)
        return cardItemFontSet(cardItemFont - 1);
      }
    }
  }
  return (
    <div className="FontRegular">
      <div onClick={() => changeFont('+')} className="regular_item">+</div>
      <div onClick={() => changeFont('-')} className="regular_item">-</div>
    </div>
  )
};

export default FontRegular;
