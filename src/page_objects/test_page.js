const { commmonElements, commonCommands } = require("./common/common_page");
const logger = require("../utils/logger");

const loginPageElements = {
  body: "body",
  input: "input[type=search]",
  result: ".mainline-results",
};
const loginPageCommands = {
  inputSearchQuery(value) {
    try {
      logger.infoLog("[completed] Step: Input Search Query");
      return this.assert.visible("@input").setValue("@input", value);
    } catch (error) {
      logger.errorLog(`[failed] Step: Input Search Query. ${error.message}`);
    }
  },
};

module.exports = {
  url: "https://www.ecosia.org/",
  elements: [commonElements, loginPageElements],
  commands: [commonCommands, loginPageCommands],
};
