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

const check_word_in_known_unknown = (login, category, word, calback) => {
  users.findOne({ login }, [category]).exec((err, data) => {
    if (err) return errorLog(`check ${category}`, err);
    const categoryWords = data[category];
    const originalArr = categoryWords.map((el) => el.original);
    if (originalArr.includes(word.original)) return calback({ code: 1 });
    return calback({ code: 0, data });
  });
};
const delete_word_from_known_unknown = (login, category, word) => {
  console.log({ login, category, word });
  users.findOne({ login }, [category]).exec((err, data) => {
    if (err) return errorLog(`find word in ${category}`, err);
    const needItems = data[category].filter(
      (el) => el.original !== word.original
    );
    if (needItems.length !== data[category].length) {
      const changed =
        category === "knownWords"
          ? { knownWords: needItems }
          : { unknownWords: needItems };
      return users.updateOne({ login }, changed).exec((err, data) => {
        if (err) return errorLog("delete word", err);
      });
    }
  });
};
const add_word_to_known_unknown = (login, category, word, callback) => {
  delete_word_from_known_unknown(
    login,
    `${category === "knownWords" ? "unknownWords" : "knownWords"}`,
    word
  );
  check_word_in_known_unknown(login, category, word, (res) => {
    if (res.code === 1) return callback(null, { code: 1 });
    res.data[category].push(word);
    const changed =
      category === "knownWords"
        ? { knownWords: res.data.knownWords }
        : { unknownWords: res.data.unknownWords };
    return users.updateOne({ login }, changed).exec(callback);
  });
};

module.exports = {
  users,
  checkUserExist,
  createUser,
  add_word_to_known_unknown,
};
