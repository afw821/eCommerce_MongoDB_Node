const { Purchase, validate } = require('../models/Purchase');
const { Product } = require('../models/Product');
const { Buyer } = require('../models/Buyer');
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    const purchases = await Purchase.find().sort('-dateOut');
    res.send(rentals);
});




module.exports = router;