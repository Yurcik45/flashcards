const mongoose = require("mongoose");
const { infoLog } = require("../tools/custom_logs");

const UserSchema = mongoose.Schema({
  login: {
    type: String, // "login"
    required: true,
  },
  password: {
    type: String, // "password"
    required: true,
  },
  role: {
    type: String, // "admin" | "user"
    required: true,
  },
  knownWords: {
    type: [String], // ["cnown word 1", "cnown word 2"]
    required: false,
  },
  unknownWords: {
    type: [String], // ["unknown word 1", "unknown word 2"]
    required: false,
  },
  changedWords: {
    type: [String], // ["word 1 --> new_word 1", "word 2 --> new_word 2"]
    required: false,
  },
  newWords: {
    type: [String], // ["new word 1", "new word 2"]
    required: false,
  },
});

const users = mongoose.model("users", UserSchema);

const checkUserExist = (login, callback) => {
  infoLog('check')
  return users.findOne({login}).exec(callback);
}

const createUser = (user, callback) => {
  const newUser = new users(user);
  newUser.save(callback);
}

module.exports = { users, checkUserExist, createUser };
