const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const ProductSchema = new Schema ({
    productname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 55
    },
    department: {
        type: String,
         required: true,
         enum: ['Fishing', 'Hunting', 'Camping', 'Sporting', 'Leisure']
    },
    imgurl: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 255
    },
    price: {
        type: Number,
        required: true
    },
    stockquantity: {
        type: Number,
        required: true,
        min: 0
    },
    productId: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;