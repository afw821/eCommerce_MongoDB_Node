const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi'); 
const config = require('config');
const jwt = require('jsonwebtoken');

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
    },
    isAdmin: {
        type: Boolean,
        required: false
    }
});


//need method for generating auth token
//define a method for the user schema to be used again
BuyerSchema.methods.generateAuthToken = function () {
    //JWT 1st-payload/ 2nd is secret key hard coded
    //we are generating the token here
    //THE SIGN METHOD IS WHAT IS GOING TO BE OUR PAYLOAD
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}
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