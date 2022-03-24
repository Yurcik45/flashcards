const { successLog, infoLog, errorLog } = require("../tools/custom_logs");
const { add_word_to_known_unknown } = require("../models/users");

// get known words
// get unknown words
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
// get added words
// get changed words

module.exports = {
  add_to_known_unknown_controller,
};
