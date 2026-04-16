const express = require ("express")
const router = express.Router()
const { getProducts, createProduct, updateProducts } = require("../controllers/products.controllers")

router.get ("/", getProducts)
router.post ("/", createProduct)
// router.put ("/", updateProducts)


module.exports = router