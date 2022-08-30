describe("Should find results when searching for applitools", () => {
  it("work", (client) => {
    const ComplicatedPage = client.page.ComplicatedPage();
    const SearchPage = client.page.SearchPage();

    ComplicatedPage.navigate().search("applitools").verify.urlContains("/?s");

    SearchPage.getText("@post", (result) => {
      client.pause();
      client.assert.equal(result.value, "Applitools Bugs and Test Steps");
    });
  });
});
