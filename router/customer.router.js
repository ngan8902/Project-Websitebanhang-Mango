const express = require("express")
const router = express.Router()
const CustomerController = require("../controller/customer.controller")

router.post("/signup", CustomerController.signUp)

module.exports = router;