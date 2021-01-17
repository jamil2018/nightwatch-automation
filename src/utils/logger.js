const simpleLogger = require("simple-node-logger");
const fs = require("fs");

const date = new Date();

const folderPath = `./logs/${date.toDateString()}`;
const path = `${folderPath}/${date.getHours()}_${date.getMinutes()}_${date.getMilliseconds()}.log`;
const logger = (() => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  return simpleLogger.createSimpleFileLogger(path);
})();

const infoLog = (msg) => logger.log("info", msg);
const warnLog = (msg) => logger.log("warn", msg);
const errorLog = (msg) => logger.log("error", msg);
const fatalLog = (msg) => logger.log("fatal", msg);

module.exports = {
  infoLog,
  warnLog,
  errorLog,
  fatalLog,
};
