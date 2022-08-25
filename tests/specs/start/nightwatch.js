module.exports = {
  "first test": (browser) => {
    browser
      .url("https://ultimateqa.com/filling-out-forms/")
      .waitForElementVisible("body")
      .assert.title("Filling Out Forms - Ultimate QA");
    // .verify.title("Filling Out Forms - Ultimate QA")
    // .assert.visible()
    // .assert.not.visible()
    // .assert.value()
    // .assert.valueContains()
    // .assert.containsText()
    // .assert.urlEquals()
    // .assert.getTitle()
    // .assert.attributeContains("element", "placeholder")
    // .assert.cssClassPresent("element", "input")
    // .expect.element("adasd")
    // .text.to.equal("asd")
    // .expect.title()
    // .text.to.equal()
    // .expect.element("")
    // .to.have.attribute("class")
    // .which.conatin("");
  },
};
