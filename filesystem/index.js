const fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(__dirname, "notes.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
