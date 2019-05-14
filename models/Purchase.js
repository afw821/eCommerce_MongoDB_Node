const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const purchaseSchema = new Schema({
    buyer: {
        type: new mongoose.Schema({
            firstname: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 25
            },
            lastname: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 25
            },
            email: {
                type: String,
                required: true,
                unique: true,
                minlength: 5,
                maxlength: 255
            },
            password: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 1024
            }
        }),
        required: true
    },
    product: {
        type: new mongoose.Schema({
            productname: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 55
            },
            size: {
                type: Number,
                required: false
            },
            price: {
                type: Number,
                required: true
            },
            productId: {
                type: Number,
                required: true
            }
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    purchasePrice: {
        type: Number,
        min: 0
    }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
