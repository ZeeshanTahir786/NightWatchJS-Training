module.exports = {
  Navigations: (client) => {
    client
      .maximizeWindow()
      .init()
      .pause(2000)
      .url("https://ultimateqa.com/filling-out-forms")
      .pause(2000)
      .back()
      .pause(2000)
      .forward()
      .urlHash("#randonUrlParam") //
      .pause(2000);
  },
};
