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