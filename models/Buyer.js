const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyerSchema = new Schema ({
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
    }
});

const Buyer = mongoose.model('Buyer', BuyerSchema);
module.exports = Buyer;