const { Purchase, validate } = require('../models/Purchase');
const { Product } = require('../models/Product');
const { Buyer } = require('../models/Buyer');
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    const purchases = await Purchase.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/', async function (req, res) {
    const result = validate(req.body);
    if (result.error) return res.status(400).send(error.details[0].message);

    const buyer = await Buyer.findById(req.body.buyerId);
    if(!buyer) return res.status(400).send('Invalid user');

    const product = await Product.findById(req.body.productId);
    if(!product) return res.status(400).send('Product wasn not located');

    if(product.stockquantity === 0) return res.status(400).send('Product not in stock');
});




module.exports = router;