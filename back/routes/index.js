// get general words

const express = require("express");
const router = express.Router();
const { getGeneralWords } = require("../models/index");
const { registerUser, authUser } = require("./auth");
const { getUser } = require("./user");
const { infoLog, successLog, errorLog } = require("../tools/custom_logs");
const { add_to_known_unknown_controller } = require("../routes/words");

router.get("/", (req, res) => {
  // const limit = req.query?.limit ?? 10;
  const limit = 10;
  // get initial info to front-end
  // get user
  // get general words (with limit)
  getGeneralWords(limit, (err, data) => {
    if (err) return errorLog("find chanel news", err);
    successLog(data);
    res.send(data);
  });
});

router.post("/register", (req, res) => registerUser(req, res));
router.post("/auth", (req, res) => authUser(req, res));
router.get("/user", (req, res) => getUser(req, res));

router.post("/known", (req, res) =>
  add_to_known_unknown_controller(req, res, "knownWords")
);
router.post("/unknown", (req, res) =>
  add_to_known_unknown_controller(req, res, "unknownWords")
);

module.exports = router;
