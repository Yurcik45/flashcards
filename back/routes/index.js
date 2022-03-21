// get general words

const express = require("express");
const router = express.Router();
const {getGeneralWords} = require("../models/index")
const { registerUser, authUser } = require('./auth');
const { getUser } = require('./user');
const {infoLog, successLog, errorLog} = require("../tools/custom_logs")

router.get("/", (req, res) => {
  console.log('test /api');
  // const limit = req.query?.limit ?? 10;
  const limit = 0;
  // get initial info to front-end
  // get user
  // get general words (with limit)
  getGeneralWords(limit, (err, data) => {
    if (err) return errorLog("find chanel news", err);
    successLog(data);
    res.send(data)
  });
});

router.post('/register', (req, res) => registerUser(req, res));
router.post('/auth', (req, res) => authUser(req, res));
router.get('/user', (req, res) => getUser(req, res))

module.exports = router;
