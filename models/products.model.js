const mongoose = require("mongoose");

const productSchema = {
  title: {
    type: String,
    required: [true, "Es obligatorio el titulo del producto"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Es obligatorio el precio del producto"],
    min: 0, // No puede ser negativo
  },
  description: {
    type: String,
    required: [true, "Es obligatoria la descripción del producto"],
    trim: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    required: true,
  },
};

module.exports = mongoose.model("Product", productSchema);
