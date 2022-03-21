import "./WordsArea.sass";

const WordsArea = ({ words, current_word, setScroll }) => {
  const selectWord = (e) => {
    const word = e.target.textContent;
    setScroll(e.target.dataset.id);
    console.log("selected word :", word);
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
