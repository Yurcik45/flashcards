const { general_words } = require("./words");
const { users } = require("./users");

const getGeneralWords = (limit, callback) => {
  general_words.find({}, ["original", "translate"]).skip(1).limit(limit).exec(callback);
};

const findUser = (login, callback) => {
  users.find({login}).exec(callback);
};

const findUserInfo = (login, item, callback) => {
  const query = login ? {login} : {}
  users.find(query, [item]).exec(callback);
}

module.exports = { getGeneralWords };
