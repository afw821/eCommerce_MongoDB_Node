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
        enum: ['Fishing', 'Hunting', 'Camping']
    },
    date: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    },
    stockquantity: {
        type: Number
    } 
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;