const mongoose = require("mongoose");

const clicksSchema = new mongoose.Schema({
  username: { type: String, required: true },
  clicks: { type: Number, required: true },
  dollars: { type: Number, required: true },
});

module.exports = mongoose.model("ClickDrink", clicksSchema);
