const data = require("../../../globals/data");
describe("Forms Suite", () => {
  data.forEach(({ testCase, name, message, expected }) => {
    it(testCase, (client) => {
      const FormPage = client.page.FormPage();
      FormPage.navigate()
        .verify.title("Filling Out Forms - Ultimate QA")
        .enterNameAndMessage(name, message)
        .submitLeftForm()
        .saveScreenshot(`./screen_evidence/${Date.now()}.png`)
        .verify.containsText(
          "@lblLeftFormMessage",
          "Make sure you fill in all required fields."
        );
      // .verify.containsText(
      //   "@lblLeftFormMessage",
      //   expected
      // );
    });
  });
});
