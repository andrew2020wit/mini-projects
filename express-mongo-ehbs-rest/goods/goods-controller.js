const Goods = require("./goods");

exports.goodsInitTestData = function (request, response) {
  for (let i = 1; i <= 20; i++) {
    const name = "goods name #" + i;
    const description = "description #" + i + ". Some details...";
    const price = i * 10;
    const goods = new Goods({ name, description, price });
    goods.save();
  }
  response.redirect("/goods");
};
exports.listOfGoods = function (request, response) {
  Goods.find({})
    .lean()
    .exec(function (err, allGoods) {
      if (err) {
        console.log(err);
        return response.sendStatus(400);
      }
      response.render("goods", {
        goods: allGoods,
      });
    });
};
