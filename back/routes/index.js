// get general words

const express = require("express");
const router = express.Router();
const {getGeneralWords} = require("../models/index")
const {infoLog, successLog, errorLog} = require("../tools/custom_logs")

router.post("/", (req, res) => {
  let limit = 0;
  if (req?.body?.limit) limit = req.body.limit;

  getGeneralWords(limit, async (err, data) => {
    if (err) return errorLog('get general words', err);
    // res.send(data);
  });
});

module.exports = router;
