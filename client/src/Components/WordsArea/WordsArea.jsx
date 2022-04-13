import "./WordsArea.sass";

const WordsArea = ({ words, current_word, setScroll, setCurrentWord, setViewWordsList }) => {
  const selectWord = (e, word) => {
    setScroll(e.target.dataset.id);
    setCurrentWord(word);
    setViewWordsList(false)
  };
  return (
    <div className="WordsArea">
      {words.map((word, id) => {
        return (
          <div
            key={id}
            name={word.original}
            data-id={id}
            onClick={(e) =>
              selectWord(e, {
                original: word.original,
                translate: word.translate,
              })
            }
            onClickCapture={(e) =>
              selectWord(e, {
                original: word.original,
                translate: word.translate,
              })}
            className={`list-group-item WordAreaItem ${
              word.original === current_word.original && "wa-active"
            }`}
          >
            {id + 1 + "." + " " + word.original}
          </div>
        );
      })}
    </div>
  );
};

export default WordsArea;
