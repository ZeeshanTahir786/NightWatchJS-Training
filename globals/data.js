module.exports = [
  {
    testCase: "Should verify the name error message is shown",
    name: "",
    message: "defr ent vejnj jvnj jnevx cxn",
    expected: "Please, fill in the following fields:\nName",
  },
  {
    testCase: "Should verify message error is shown",
    name: "Jon",
    message: "",
    expected: "Please, fill in the following fields:\nMessage",
  },
  {
    testCase: "Should verify the name and message error message is shown",
    name: "",
    message: "",
    expected: "Please, fill in the following fields:\nName\nMessage",
  },
];
