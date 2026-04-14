const mongoose = require("mongoose");

const productSchema = {
  title: {
    type: String,
    require: [true, "Es obligatorio el titulo del producto"],
    trim: true,
  },
  price: {
    type: Number,
    require: [true, "Es obligatorio el precio del producto"],
    min: 0, // No puede ser negativo
  },
  description: {
    type: String,
    require: [true, "Es obligatoria la descripción del producto"],
    trim: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    require: true,
  },
};
module.exports = mongoose.model("Product", productSchema);
