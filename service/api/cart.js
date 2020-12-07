var express = require('express');
var router = express.Router();
var controller = require("./cart.controller");

router.post("/", controller.saveCartData);
router.get("/cart", controller.getCartData);
router.post("/placed", controller.savePlacedData);
router.get("/placed", controller.getPlacedData);

module.exports = router;