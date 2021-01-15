module.exports = {
  commonElements: {
    submitBtn: "button[type=submit]",
  },
  commonCommands: {
    submit(selector) {
      return this.click(selector);
    },
  },
};
