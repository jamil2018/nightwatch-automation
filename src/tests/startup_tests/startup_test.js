const testData = require("../../data/startup_test_data");

module.exports = {
  // use tags to group tests into a specific test category. eg: smoke, sanity etc
  "@tags": ["smoke"],
  pages: null,
  // before test setup
  before(client) {
    this.pages = { testPage: client.page.test_page() };
  },
  "Demo test ecosia.org"() {
    this.pages.testPage
      .navigate()
      .waitForElementVisible("@body")
      .assert.titleContains(testData.pageTitle)
      .inputSearchQuery(testData.searchQuery)
      .assert.visible("@submitBtn")
      .submit("@submitBtn")
      .assert.containsText("@result", testData.searchQuery)
      .end();
  },
};
