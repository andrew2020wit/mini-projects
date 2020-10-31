const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
const goodsScheme = new Schema({
    name: String,
    description: String,
    price: Number
});
module.exports = mongoose.model("goods", goodsScheme);