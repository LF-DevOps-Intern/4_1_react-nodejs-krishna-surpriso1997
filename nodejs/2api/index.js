const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Node JS installed");
});

app.listen(7080, () => {
  console.log(`Server listening on port 7080`);
});
