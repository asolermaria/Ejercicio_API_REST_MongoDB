const express = require ("express")
const router = express.Router()
const {getProviders, createProviders, updateProviders, deleteProviders} = require ("../controllers/provider.controller")

router.get ("/", getProviders)
router.post ("/", createProviders)
router.put ("/", updateProviders)
router.delete ("/", deleteProviders)

module.exports = router