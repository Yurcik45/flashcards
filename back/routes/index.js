// get general words

const express = require("express");
const router = express.Router();
const { getGeneralWords } = require("../models/index");
const { registerUser, authUser } = require("./auth");
const { getUser } = require("./user");
const { infoLog, successLog, errorLog } = require("../tools/custom_logs");
const {
  getWord,
  addWord,
  updateWord,
  deleteWord,
} = require("../routes/words");

router.get("/", (req, res) => {
  // const limit = req.query?.limit ?? 10;
  const limit = 50;
  getGeneralWords(limit, (err, data) => {
    if (err) return errorLog("find chanel news", err);
    successLog(data);
    res.send(data);
  });
});

router.post("/register", registerUser);
router.post("/auth", authUser);
router.get("/user", getUser);

router.get("/words", getWord);
router.post("/words", addWord);
router.patch("/words", updateWord);
router.delete("/words", deleteWord);

module.exports = router;
