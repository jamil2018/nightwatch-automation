const { commonElements, commonCommands } = require("./common/common_page");

const loginPageCommands = {
  inputSearchQuery(value) {
    return this.assert.visible("@input").setValue("@input", value);
  },
};
const loginPageElements = {
  body: "body",
  input: "input[type=search]",
  result: ".mainline-results",
};

module.exports = {
  url: "https://www.ecosia.org/",
  elements: [commonElements, loginPageElements],
  commands: [commonCommands, loginPageCommands],
};
