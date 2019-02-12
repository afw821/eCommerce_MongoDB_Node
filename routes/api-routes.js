const Product = require('../models/Product');

module.exports = function (app) {
    app.get('/api/products', (req, res) => {
        Product.find({})
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
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

    })


}