// check user exists on db
// get user login, pass
// change login
// change passwor
// restore password

// codes
// r0 - register OK
// r1 - already have an account
// l0 - login OK
// l1 - doesn't have an account
const { infoLog, successLog, errorLog } = require("../tools/custom_logs");
const { checkUserExist, createUser } = require("../models/users");

const registerUser = (req, res) => {
  const body = req.body;
  checkUserExist(body.login, (err, data) => {
    if (err) return errorLog('check exist user error', err);
    if (data?.login === body.login) {
      infoLog('already have user');
      res.send({
        code: 'r1',
        msg: `user ${body.login} already have an account`
      })
    } else {
      infoLog('...')
      const user = {
        login: body.login,
        password: body.password,
        role: "user",
        knownWords: [],
        unknownWords: [],
        changedWords: [],
        newWords: [],
      };
      createUser(user, (err, data) => {
        if (err) {
          errorLog("create user failed", err);
          return res.send({err});
        }
        console.log(data);
        return res.send({
          msg: `User ${user.login} created`,
          code: "r0",
          user: data
        });
      });
    }
  })
};


const authUser = (req, res) => {
  const body = req.body;
  checkUserExist(body.login, (err, data) => {
    if (err) return errorLog('check exist user error', err);
    if (data?.login === body.login) {
      if (data?.password === body.password) {
        return res.send({
          msg: `User ${body.login} loggined`,
          code: "l0",
          user: data
        });
      }
    } else {
      infoLog(`user ${body.login} doesn't have an account`);
      res.send({
        code: 'l1',
        msg: `user ${body.login} doesn't have an account`
      })
    }
  })
};

module.exports = { registerUser, authUser };
