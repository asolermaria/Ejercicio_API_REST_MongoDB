const mongoose = require("mongoose");
const Provider = require("../models/provider.model");
const Product = require("../models/products.model");

// GET
// http://localhost:3000/api/providers
const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();

    if (providers.length === 0) {
      return res.status(200).json({
        message: "No existen proveedores",
      });
    }

    res.status(200).json(providers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// POST
// http://localhost:3000/api/providers
const createProviders = async (req, res) => {
  try {
    const { company_name, CIF, address, url_web } = req.body;

    if (!company_name || !CIF || !address || !url_web) {
      return res.status(400).json({
        message:
          "Faltan datos obligatorios: {company_name, CIF, address, url_web}",
      });
    }

    const provider = await Provider.create(req.body);
    res.status(201).json({
      message: `Proveedor creado: ${provider.company_name}`,
      provider,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// PUT
// http://localhost:3000/api/providers/
const updateProviders = async (req, res) => {
  const { company_name } = req.body;

  try {
    if (!company_name) {
      return res.status(400).json({
        message: "El campo company_name es obligatorio para actualizar",
      });
    }

    const provider = await Provider.findOneAndUpdate(
      { company_name },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!provider) {
      return res.status(404).json({
        message: "Proveedor no encontrado",
      });
    }

    res.status(200).json({
      message: `Proveedor actualizado: ${provider.company_name}`,
      provider,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// DELETE
// http://localhost:3000/api/providers
const deleteProviders = async (req, res) => {
  const company_name = req.body.company_name;

  try {
    const provider = await Provider.findOneAndDelete({ company_name });

    if (!provider) {
      return res.status(404).json({
        message: "Proveedor no encontrado",
      });
    }

    await Product.deleteMany({ provider: provider._id }); //Borramos los también los productos del provider

    res.status(200).json({
      message: `Se ha borrado el proveedor: ${provider.company_name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = {
  getProviders,
  createProviders,
  updateProviders,
  deleteProviders,
};
