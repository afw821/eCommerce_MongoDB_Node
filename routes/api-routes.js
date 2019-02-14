
const Buyer = require('../models/Buyer');
const express = require('express');
const router = express.Router();

    router.get('/', (req, res) => {
        Buyer.find({})
            .then(function(data) {
                
                res.json(data);
            })
            .catch(function (err)  {
                res.json(err);
            });
    });
    router.post('/', function (req, res) {
        Buyer.create(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function(err) {
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
    router.put('/:id', (req, res) => {
        Buyer.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    });
    
module.exports = router;

