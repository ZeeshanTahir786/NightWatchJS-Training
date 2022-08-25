module.exports = {
  "demo Test": (client) => {
    client.maximizeWindow();
    client
      .url("https://ultimateqa.com/filling-out-forms/")
      .element("css selector", "body", (result) => {
        console.log(result.value);
      });
  },
  "demo with ES6": async (client) => {
    const result = await client.element("css selector", "body");
    console.log("result value is", result);
  },
  "getting multiple elements": async (client) => {
    const result = await client.elements("css selector", "input[type='text']");
    console.log("multiple result value is", result);
  },
  "Wait for element": async (client) => {
    client.waitForElementVisible(
      {
        selector: "#footer-info",
        locateStrategy: "css selector",
        timeout: 2000,
      },
      "Element is visible"
    );
  },
};
