import "./WordsArea.sass";

const WordsArea = ({ words, current_word, setScroll,
  setCurrentWord, }) => {
  const selectWord = (e) => {
    const word = e.target.textContent;
    setScroll(e.target.dataset.id);
    setCurrentWord(word)
  };
  return (
    <div className="WordsArea">
      {words.map((word, id) => {
        return (
          <div
            key={id}
            name={word.original}
            data-id={id}
            onClick={selectWord}
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
