module.exports = {
  "User Actions & Prompts": function (client) {
    client
      .url("https://www.ultimateqa.com/filling-out-forms/")

      .setValue(
        "#et_pb_contact_message_0",
        " Testing sequence of strokes to an active elements..."
      )
      .pause(2000)
      .keys(client.Keys.BACK_SPACE)
      .pause(2000)
      .keys(client.Keys.BACK_SPACE)
      .pause(2000)
      .keys(client.Keys.ENTER)
      .pause(2000)
      .keys(client.Keys.SUBTRACT)
      .pause(2000)
      .assert.valueContains("#et_pb_contact_message_0", "Testing sequence");
    client.expect
      .element("button[name='et_builder_submit_button']:nth-child(1)")
      .text.equal("Submit");
    client.expect
      .element("#et_pb_contact_message_0")
      .to.have.attribute("placeholder")
      .which.contains("Message");
  },
  "mouse click": function (client) {
    client
      .mouseButtonClick("left")
      .pause(2000)
      .mouseButtonClick("right")
      .pause(2000);
  },
  "window actions": function (client) {
    client.openNewWindow("tab").fullscreenWindow();
    client
      .windowHandles(function (result) {
        // An array of window handles.
        const newWindow = result.value[1];
        console.log(result);
        client.switchWindow(newWindow);
      })
      .pause(3000);
  },
  "should intract with alert": function (client) {
    client
      .url("https://demo.automationtesting.in/Alerts.html")
      .click("#OKTab")
      .getAlertText((result) => {
        console.log(result);
        client.assert.equal(result?.value, "I am an alert box!");
      })
      .acceptAlert()
      .pause(2000);
  },
  "Assert vs verify": (client) => {
    client
      .windowHandles(function (result) {
        // An array of window handles.
        const newWindow = result.value[0];
        console.log(result);
        client.switchWindow(newWindow);
      })
      .pause(2000)
      .assert.visible("button[name='et_builder_submit_button']:nth-child(1)")
      .verify.visible("button[name='et_builder_submit_button']:nth-child(1)");
  },
  "Verify url": (client) => {
    client.verify.urlEquals("https://ultimateqa.com/filling-out-forms/");
    client.expect.url().to.equal("https://ultimateqa.com/filling-out-forms/");
    client.expect.title().to.contains("Filling Out Forms");
  },
  "expect assertions": (client) => {
    client.setValue("input[data-original_id='name']:nth-child(2)", "Hello");
    client.expect
      .element("input[data-original_id='name']:nth-child(2)")
      .to.have.value.which.equal("Hello");
  },
};
