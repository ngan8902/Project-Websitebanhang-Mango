const express = require("express")
const router = express.Router()
const ProductController = require("../controller/productcontroller")


router.get("/", (req, res) => {
    res.end('Home');
})

router.post("/", (req, res) => {
    res.end('Home');
})

router.put("/", (req, res) => {
    res.end('Home');
})

router.delete("/", (req, res) => {
    res.end('Home');
})

module.exports = router;