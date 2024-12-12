const mongoose = require("mongoose");

const clicksSchema = new mongoose.Schema({
  clicks: { type: Number, required: true },
  dollars: { type: Number, required: true },
});

module.exports = mongoose.model("ClickDrink", clicksSchema);
