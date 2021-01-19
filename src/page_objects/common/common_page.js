commonElements = {
  submitBtn: "button[type=submit]",
};
commonCommands = {
  submit(selector) {
    return this.click(selector);
  },
};

module.exports = { commonElements, commonCommands };
