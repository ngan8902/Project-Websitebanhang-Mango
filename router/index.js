const express = require("express")
const router = express.Router()
const ProductRouter = require("./productrouter")
const CustomerRouter = require("./customerrouter")

router.use('/product', ProductRouter);
router.use('/custonmer', CustomerRouter);

module.exports = router;