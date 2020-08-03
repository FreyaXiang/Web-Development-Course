const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HELLO</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>xiangxin0511@gmail.com</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>My name is Xin Xiang.</h1>");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
