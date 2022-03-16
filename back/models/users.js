const mongoose = require("mongoose");

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
    type: [String], // ["word 1 to changed word 1", "word 2 to changed word 2"]
    required: false,
  },
  newWords: {
    type: [String], // ["new word 1", "new word 2"]
    required: false,
  },
});

const users = mongoose.model("users", UserSchema);

module.exports = { users };
