const mongoose = require("mongoose");

const GeneralWordsSchema = mongoose.Schema({
  original: {
    type: String,
    required: true,
  },
  translate: {
    type: String,
    required: true,
  },
});

const general_words = mongoose.model("general_words", GeneralWordsSchema);

module.exports = { general_words };
