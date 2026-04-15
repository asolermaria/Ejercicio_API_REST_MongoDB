const mongoose = require("mongoose");
const Product = require("../models/products.model");
const Provider = require("../models/provider.model");

// GET
// http://localhost:3000/api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("provider");

    if (products.length === 0) {
      return res.status(200).json({
        message: "No existen productos",
      });
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// POST
// http://localhost:3000/api/products
// const createProducts = async (req, res) => {
//   try {
//     const { company_name, CIF, address, url_web } = req.body;

//     if (!company_name || !CIF || !address || !url_web) {
//       return res.status(400).json({
//         message:
//           "Faltan datos obligatorios: {company_name, CIF, address, url_web}",
//       });
//     }

//     const provider = await Provider.create(req.body);
//     res.status(201).json({ message: `Proveedor creado: ${provider.company_name}`, provider });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error del servidor" });
//   }
// };

module.exports = {
  getProducts,
//   createProducts
};