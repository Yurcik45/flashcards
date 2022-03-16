import "./WordsArea.sass";

const WordsArea = ({ words, current_word }) => {
  const selectWord = (e) => {
    const word = e.target.textContent;
    console.log("selected word :", word);
  };
  return (
    <div className="WordsArea">
      {words.map((word, id) => {
        return (
          <div
            key={id}
            name={word}
            onClick={selectWord}
            className={`list-group-item WordAreaItem ${
              word === current_word && "active"
            }`}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
};

export default WordsArea;
