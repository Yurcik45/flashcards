const { successLog, infoLog, errorLog } = require("../tools/custom_logs");
const { add_word_to_user_list } = require("../models/users");

const add_to_known_unknown_controller = (req, res, category) => {
  const body = req.body;
  const login = body.login;
  const originalWord = req.body.word.original;
  const word = body.word;
  add_word_to_known_unknown(login, category, word, (err, data) => {
    if (err) return errorLog(`add to ${category} callback`, err);
    if (data?.code === 1)
      return res.send({
        code: 1,
        msg: `"${originalWord}" already exists at ${
          category === "knownWords" ? "known" : "unknown"
        } list`,
      });
    return res.send({
      code: 0,
      msg: `"${originalWord}" succesful added to ${
        category === "knownWords" ? "known" : "unknown"
      } list`,
      item: word,
    });
  });
};
const getWord = (req, res) => {};
const addWord = (req, res) => {
  const login = req.body.login;
  const word = req.body.word;
  const list = req.body.list;
  const originalWord = list !== "changedWords" ? word.original : word.old.original;
  add_word_to_user_list(login, word, list, (err, data) => {
    if (err) {
      errorLog(`init call add ${originalWord} in ${list}`, err);
      return res.send({
        code: 1,
        msg: `cant't add ${originalWord} to ${list}`,
      });
    };
    return res.send({
      code: 0,
      msg: `"${originalWord}" added to ${list}`
    })
  });
};
const updateWord = (req, res) => {};
const deleteWord = (req, res) => {};

module.exports = {
  getWord,
  addWord,
  updateWord,
  deleteWord,
};
