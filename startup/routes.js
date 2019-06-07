const express = require('express');
const products = require('../routes/products');
const buyers = require('../routes/buyers');
const auth = require('../routes/auth');
const path = require('path');
module.exports = function (app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/api/products', products);
    app.use('/api/buyer', buyers);
    app.use('/api/auth', auth);
}
