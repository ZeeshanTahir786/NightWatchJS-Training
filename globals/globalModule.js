const fs = require("fs");
module.exports = {
  reporter: (results, done) => {
    fs.writeFile(
      "testsResult.json",
      JSON.stringify(results, null, "\t"),
      (err) => {
        if (err) throw err;

        console.log("report saved");
        done();
      }
    );
  },
};
