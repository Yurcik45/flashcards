// send new words
// send corrected word
// block user
// get user
const { checkUserExist } = require("../models/users");
const { infoLog, successLog, errorLog } = require('../tools/custom_logs');

const getUser = (req, res) => {
  const login = req.query.user;
  checkUserExist(login, (err, data) => {
    if (err) return errorLog("check exist user error", err);
    if (data?.login === login) {
      infoLog("already have user");
      res.send({ user: data });
    }
  });
};

module.exports = { getUser };
