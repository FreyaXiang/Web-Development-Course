const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// urlencoded: html form data
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculator is " + result);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height * height);
  res.send("Your BMI is " + result);
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
