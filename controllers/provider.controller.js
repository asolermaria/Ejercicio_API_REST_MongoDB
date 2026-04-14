const Provider = require("../models/provider.model");

// GET
// http://localhost:3000/api/providers
const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (error) {
    console.log(error);
  }
};

// POST
const createProviders = async (req, res) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(201).json(provider);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProviders,
  createProviders,
};
