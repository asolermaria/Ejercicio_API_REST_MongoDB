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
const createProduct = async (req, res) => {
  try {
    const { title, price, description, company_name } = req.body;

    if (!title || !price || !description || !company_name) {
      return res.status(400).json({
        message:
          "Faltan datos obligatorios: { title, price, description, company_name }",
      });
    }

    const provider = await Provider.findOne({ company_name });

    if (!provider) {
      return res.status(404).json({ message: "Proveedor no encontrado" });
    }

    const product = await Product.create({
      title,
      price,
      description,
      provider: provider._id,
    });

    res
      .status(201)
      .json({ message: `Producto creado: ${product.title}`, product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// PUT
// http://localhost:3000/api/products
// const updateProducts = async (req, res) => {
//   const { title, price, description, provider } = req.body;

//   try {
//     if (!title) {
//       return res.status(400).json({
//         message: "El campo title es obligatorio para actualizar",
//       });
//     }

//     const product = await Product.findOneAndUpdate(
//       { title },
//       {
//         price,
//         description,
//         provider: provider._id,
//       },
//       {
//         new: true,
//         runValidators: true,
//       },
//     );

//     if (!product) {
//       return res.status(404).json({
//         message: "Producto no encontrado",
//       });
//     }

//     res.status(200).json({
//       message: `Producto actualizado: ${product.title}`,
//       product,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error del servidor" });
//   }
// };

module.exports = {
  getProducts,
  createProduct,
  // updateProducts,
};
