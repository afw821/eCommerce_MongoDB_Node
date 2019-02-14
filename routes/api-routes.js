const Product = require('../models/Product');
const Buyer = require('../models/Buyer');
const express = require('express');
const router = express.Router();
// module.exports = function (router) {
    router.get('/', (req, res) => {
        Product.find({})
            .then(function(data) {
                
                res.json(data);
            })
            .catch(function (err)  {
                res.json(err);
            });
    });
    router.post('/', function (req, res) {
        Product.create(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function(err) {
            res.json(err);
        });
    });
    router.get('/:id', (req, res) => {
        Product.find({ _id: req.params.id })
            .then((data) => {
                res.json(data);
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
    //api routes for the buyer
    // app.post('/api/buyer', (req, res) => {
    //     Buyer.create(req.body)
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch((err) => {
    //         res.json(err);
    //     });
    // });
    // app.get('/api/buyer', (req, res) => {
    //     Buyer.find({})
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .then((err) => {
    //         res.json(err);
    //     });
    // });
    // app.get('/api/buyer/:id', (req, res) => {
    //     Buyer.find({ _id: req.params.id })
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch((err) => {
    //         res.json(err);
    //     });
    // });
module.exports = router;

// }