const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
  path.resolve(__dirname, "article.txt"),
  {
    highWaterMark: 10,
  }
);

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (e) {
    console.log("error: ", e);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
