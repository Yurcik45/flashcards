import { useState } from "react";
import WordsArea from "../WordsArea/WordsArea";
import "./WordsList.sass";
import ClickAwayListener from "react-click-away-listener";

const WordsList = ({
  words,
  current_word,
  viewWordsList,
  setViewWordsList,
}) => {
  return (
    <div
      onClick={() => setViewWordsList(true)}
      className={`WordsList ${
        words && viewWordsList ? "fully_words_list" : "enpty_words_list"
      }`}
    >
      {words && viewWordsList ? (
        <ClickAwayListener onClickAway={() => setViewWordsList(false)}>
          <WordsArea words={words} current_word={{ current_word }} />
        </ClickAwayListener>
      ) : (
        "Words List"
      )}
    </div>
  );
};

export default WordsList;
