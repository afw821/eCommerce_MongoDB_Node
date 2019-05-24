const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi'); 

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
});


//need method for generating auth token

const Buyer = mongoose.model('Buyer', BuyerSchema);

function validateBuyer(buyer) {
    const schema = {
        firstname: Joi.string().min(1).max(25).required(),
        lastname: Joi.string().min(1).max(25).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }
    return Joi.validate(buyer, schema);
}
module.exports.Buyer = Buyer;
module.exports.validate = validateBuyer;