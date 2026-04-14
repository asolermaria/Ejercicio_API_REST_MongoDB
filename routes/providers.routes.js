const express = require ("express")
const router = express.Router()
const {getProviders, createProviders} = require ("../controllers/provider.controller")

router.get ("/", getProviders)
router.post ("/", createProviders)

module.exports = router