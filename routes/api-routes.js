const Product = require('../models/Product')

const express = require('express');
const router = express.Router();
// const path = require('path');

router.get('/', async function (req, res) {
    const products = await Product.find();
    try{
        res.send(products);
    } catch (err){
        console.log(err);
    }
});

router.post('/', async function (req, res) {
    // Product.create(req.body)
    //     .then(function (data) {
    //         res.json(data)
    //     })
    //     .catch(function (err) {
    //         res.json(err);
    //     });
    let product = new Product({
        productname: req.body.productname,
        department: req.body.department,
        imgurl: req.body.imgurl,
        size: req.body.size,
        description: req.body.description,
        price: req.body.price,
        stockquantity: req.body.stockquantity,
        productId: req.body.productId
    });

    product  = await product.save();
    res.send(product);
});
router.get('/:id', function (req, res) {
    Product.find({ _id: req.params.id })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});
router.get('/department/:department', function (req, res) {
    Product.find({ department: req.params.department }, function (err, doc) {
        if (err) {
            res.json(err);
            return;
        }
        res.json(doc);
    });
});
router.get('/department/:department/department/:department', async function (req, res) {
    const products = await Product.find()
    .or( [ { department: 'Sporting' }, { department: 'Leisure' } ] )
    .then(function (data) {
        res.json(data);
        res.json(products);
    })
    .catch(function (err) {
        res.json(err);
    });
   
});
router.put('/:id', function (req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        })
});

module.exports = router;

