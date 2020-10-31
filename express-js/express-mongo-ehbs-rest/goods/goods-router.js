const express = require("express");
const goodsController = require("./goods-controller");
const goodsRouter = express.Router();

goodsRouter.get("/", goodsController.listOfGoods);
goodsRouter.get("/test-init", goodsController.goodsInitTestData);

module.exports = goodsRouter;