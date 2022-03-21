const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 4000;
const { runmongo } = require("./runmongo.js");
const { infoLog, successLog, errorLog } = require("./tools/custom_logs");
const { getGeneralWords } = require("./models/index");

app.use(express.json({ extended: true }));
app.use(cors());
app.use('/api', require('./routes/index'));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("it is flashcards backend"));

app.listen(PORT, () => infoLog(`-- server started on port ${PORT} --`));

runmongo();
