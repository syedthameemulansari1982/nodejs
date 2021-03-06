const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT STARTED WORKING WITH SAMPLE OUTPUT");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});
app.get("/new/sampleapp", function (req, res) {
  res.send("New sample application also worked");
});
app.listen(process.env.PORT || 5000);
module.exports = app;
