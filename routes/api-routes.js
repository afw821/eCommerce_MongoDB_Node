const Product = require('../models/Product')

const express = require('express');
const router = express.Router();
// const path = require('path');

router.get('/', function (req, res) {
    Product.find({})
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});

router.post('/', function (req, res) {
    Product.create(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            res.json(err);
        });
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
router.get('/department/:department', (req, res) => {
    Product.find({ department: req.params.department }, function (err, doc) {
        if (err) {
            res.json(err);
            return;
        }
        res.json(doc);
    });
});
router.get('/department/:department/department/:department', async (req, res) => {
    const products = await Product.find()
    .or( [ { department: 'Sporting' }, { department: 'Leisure' } ] )
    .then((data) => {
        res.json(data);
        res.json(products);
    })
    .catch((err) => {
        res.json(err);
    });
   
});
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});

module.exports = router;

