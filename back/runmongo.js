const mongoose = require("mongoose");
const {mongo} = require("./config/mongo.js");
const {infoLog, successLog, errorLog} = require("./tools/custom_logs.js");

const runmongo = () => {
	infoLog("runmongo called");
	try {
		mongoose.connect(mongo(), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		mongoose.connection.on("connected", () => {
			successLog("_-_ Connected to mongoDB _-_");
		});
		mongoose.connection.on("error", (err) => {
			errorLog("___ NOT!!! connected to mongoDB ___", err);
		});
	} catch (error) {
		errorLog(error.name, error)		
	}
};

module.exports = {runmongo}
