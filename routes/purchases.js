const { Purchase, validate } = require('../models/Purchase');
const { Product } = require('../models/Product');
const { Buyer } = require('../models/Buyer');
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    const purchases = await Purchase.find().sort('-dateOut');
    res.send(purchases);
});

router.post('/', async function (req, res) {
    const result = validate(req.body);
    if (result.error) return res.status(400).send(error.details[0].message);

    const buyer = await Buyer.findById(req.body.buyerId);
    if(!buyer) return res.status(400).send('Invalid user');

    const product = await Product.findById(req.body.productId);
    if(!product) return res.status(400).send('Product wasn not located');

    if(product.stockquantity === 0) return res.status(400).send('Product not in stock');

    let purchase = new Purchase({
        buyer: {
            _id: buyer._id,
            firstname: buyer.firstname,
            lastname: buyer.lastname,
            email: buyer.email
        },
        product: {
            _id: product._id,
            size: product.size,
            price: product.price,
            productId: product.productId
        }
    });

    purchase = await purchase.save();

    product.stockquantity--;
    product.save();

    res.send(purchase);
});

router.get('/:id', async function (req, res) {
    const purchase = await Purchase.findById(req.params.id);
  
    if (!purchase) return res.status(404).send('The rental with the given ID was not found.');
  
    res.send(purchase);
  });



module.exports = router;