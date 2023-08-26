const express = require("express")
const router = express.Router()
const ShopController = require('../controller/shop.controller')

router.post("/", ShopController.createShop)
router.post("/login", ShopController.login)

module.exports = router;