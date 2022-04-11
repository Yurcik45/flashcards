const mongoose = require("mongoose");
const { infoLog, errorLog } = require("../tools/custom_logs");

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
  knownWords: [
    {
      original: {
        type: String,
        required: true,
      },
      translate: {
        type: String,
        required: true,
      },
    },
  ],
  unknownWords: [
    {
      original: {
        type: String,
        required: true,
      },
      translate: {
        type: String,
        required: true,
      },
    },
  ],
  changedWords: [
    {
      old: {
        original: {
          type: String,
          required: true,
        },
        translate: {
          type: String,
          required: true,
        },
      },
      new: {
        original: {
          type: String,
          required: true,
        },
        translate: {
          type: String,
          required: true,
        },
      },
    },
  ],
  newWords: [
    {
      original: {
        type: String,
        required: true,
      },
      translate: {
        type: String,
        required: true,
      },
    },
  ],
});

const users = mongoose.model("users", UserSchema);

const checkUserExist = (login, callback) => {
  infoLog("check");
  return users.findOne({ login }).exec(callback);
};

const createUser = (user, callback) => {
  const newUser = new users(user);
  newUser.save(callback);
};

const delete_exists_word_in_user_list = (login, word, list) => {
  users.findOne({ login }, [list]).exec((err, data) => {
    if (err) return errorLog(`find ${word} from ${list}`);
    const resultList = [];
    const needList = data[list];
    const originals = needList.map((el) => el.original);
    if (originals.includes(word.original)) {
      needList.forEach(
        (el) => el.original !== word.original && resultList.push(el)
      );
      users.updateOne({ login }, { [list]: resultList }).exec((err, data) => {
        if (err) return errorLog(`delete ${word} from ${list}`);
      });
    }
  });
};

const choseDeletedList = (list) => {
  switch (list) {
    case "knownWords":
      return ["unknownWords", "changedWords", "newWords"];
    case "unknownWords":
      return ["knownWords", "changedWords", "newWords"];
    case "changedWords":
      return ["knownWords", "unknownWords", "newWords"];
    case "newWords":
      return [];
    default:
      break;
  }
};

const add_word_to_user_list = (login, word, list, callback) => {
  // delete this word from other lists
  if (choseDeletedList(list).length > 0) {
    choseDeletedList(list).forEach((list_item) => {
      delete_exists_word_in_user_list(login, word, list_item);
    });
  }
  users.findOne({login}, [list]).exec((err, data) => {
    if (err) return errorLog(`find ${word} in ${list}`, err);
    const currentList = data[list];
    currentList.push(word);
    users.updateOne({login}, {[list]: currentList}).exec(callback);
  })
};

module.exports = {
  users,
  checkUserExist,
  createUser,
  add_word_to_user_list,
};
