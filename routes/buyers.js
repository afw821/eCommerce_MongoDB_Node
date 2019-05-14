
const Buyer = require('../models/Buyer');
const express = require('express');
const router = express.Router();

//api routes for the buyer
router.post('/', function (req, res) {
    Buyer.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});
router.get('/', function (req, res) {
    Buyer.find({})
    .then(function (data) {
        res.json(data);
    })
    .then(function (err) {
        res.json(err);
    });
});
router.get('/:id', function (req, res) {
    Buyer.find({ _id: req.params.id })
    .then(function (data) {
        res.json(data);
    })
    .catch(function (err) {
        res.json(err);
    });
});

module.exports = router;