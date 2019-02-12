const Product = require('../models/Product');
const Buyer = require('../models/Buyer');
module.exports = function (app) {
    app.get('/api/products', (req, res) => {
        Product.find({})
            .then(function(data) {
                
                res.json(data);
            })
            .catch(function (err)  {
                res.json(err);
            });
    });
    app.post('/api/products', function (req, res) {
        Product.create(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function(err) {
            res.json(err);
        });
    });
    app.get('/api/products/:id', (req, res) => {
        Product.find({ _id: req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    });
    app.put('/api/products/:id', (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    });
    app.post('/api/buyer', (req, res) => {
        Buyer.create(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });
    app.get('/api/buyer', (req, res) => {
        Buyer.find({})
        .then((data) => {
            res.json(data);
        })
        .then((err) => {
            res.json(err);
        });
    });
    app.get('/api/buyer/:id', (req, res) => {
        Buyer.find({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });


}