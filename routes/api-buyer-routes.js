
const Buyer = require('../models/Buyer');
const express = require('express');
const router = express.Router();

//api routes for the buyer
router.post('/', (req, res) => {
    Buyer.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});
router.get('/', (req, res) => {
    Buyer.find({})
    .then((data) => {
        res.json(data);
    })
    .then((err) => {
        res.json(err);
    });
});
router.get('/:id', (req, res) => {
    Buyer.find({ _id: req.params.id })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;