const express = require ("express")
const router = express.Router()
const { getProducts, createProduct, updateProducts, deleteProducts } = require("../controllers/products.controllers")

router.get ("/", getProducts)
router.post ("/", createProduct)
router.put ("/", updateProducts)
router.delete ("/", deleteProducts)


module.exports = router