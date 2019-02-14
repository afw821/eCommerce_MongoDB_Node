const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    productname: {
        type: String,
        required: true,
        minlength: 1

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
        minlength: 10
    },
    price: {
        type: Number,
        required: true
    },
    stockquantity: {
        type: Number,
        required: true
    } 
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;