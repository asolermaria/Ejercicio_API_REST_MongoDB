const mongoose = require("mongoose");

const providerSchema = {
  company_name: {
    type: String,
    required: [true, "Es obligatorio el nombre de la compañía"],
    trim: true,
  },
  CIF: {
    type: String,
    required: [true, "Es obligatorio el CIF"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Es obligatoria la dirección"],
    trim: true,
  },
  url_web: {
    type: String,
    required: [true, "Es obligatoria la URL"],
    trim: true,
  },
};

module.exports = mongoose.model("Provider", providerSchema);