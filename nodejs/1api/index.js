const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node JS");
});

app.listen(6080, () => {
  console.log(`Server listening on port 6080`);
});
