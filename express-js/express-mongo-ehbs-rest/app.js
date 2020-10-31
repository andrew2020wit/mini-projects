const express = require("express");
var exphbs = require("express-handlebars");
const goodsRouter = require("./goods/goods-router");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use("/goods", goodsRouter);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/settings", function (req, res) {
  res.render("settings");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.use(function (res) {
  res.status(404).send("Not Found");
});

mongoose.connect(
  "mongodb://localhost:27017/mongo-db-test",
  {
    useNewUrlParser: true,
    auth: {
      authSource: "admin",
    },
    user: "root",
    pass: "rootpassword",
  },
  function (err) {
    if (err) return console.log(err);
  }
);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
