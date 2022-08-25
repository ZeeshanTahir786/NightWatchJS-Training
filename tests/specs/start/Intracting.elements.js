describe("Intracting with elements", function () {
  it("Set and clear values", function (client) {
    client
      .maximizeWindow()
      .navigateTo("https://ultimateqa.com/filling-out-forms/")
      .waitForElementVisible("body")
      .setValue("#et_pb_contact_name_0", "Testing")
      .pause(2000)
      .clearValue("#et_pb_contact_name_0")
      .pause(2000);
  });
  it("Set and clear values", function (client) {
    client
      .maximizeWindow()
      .navigateTo("https://ultimateqa.com/filling-out-forms/")
      .waitForElementVisible("body")
      .getText(
        "button[name='et_builder_submit_button']:nth-child(1)",
        function (val) {
          console.log(typeof val);
          this.assert.strictEqual(val?.status, 0); // only when using Selenium / JSONWire
          this.assert.equal(val?.value, "Submit");
        }
      )
      .moveToElement(
        "button[name='et_builder_submit_button']:nth-child(1)",
        10,
        10
      )
      .pause(2000);
  });
});
