const express = require("express")
const router = express.Router()
const CustomerController = require("../controller/customercontroller")

router.get('/', (reg,res) => {
    let customer =CustomerController.getCustomer();
    res.json(customer);
})

router.get("/", (req, res) => {

    res.json({
        id: 1,
        name: "abc"
    })
})

module.exports = router;