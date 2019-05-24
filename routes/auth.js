const Joi = require('joi');
const { Buyer } = require('../models/Buyer');
const express = require('express');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const router = express.Router();
//POSTING A LOGIN------VALIDATING AN EXISTING USER AND LOGGING HIM IN
router.post('/', async function (req, res) {
    //validate the req.body object
    const result = validateBuyer(req.body);
    //if invalid return a 404 error to the client
    if (result.error) {
        res.status(404).send(result.error.details[0].message);
        return;
    }
    //loook up user by email to see if they already exist
    let buyer = await Buyer.findOne({ email: req.body.email });
    //used to validate username and email (dont't want to tell the client why the auth failed)
    if (!buyer) return res.status(400).send('invalid email or password');

    //validate password, plain text PW, Hashed PW, Returns a boolean
    const validPassword = await bcrypt.compare(req.body.password, buyer.password);
    //if password is invalid send bad request back to the client
    if(!validPassword) return res.status(400).send('invalid email or password');
    //generate auth token from schema method in user.js
    const token = buyer.generateAuthToken();//token generated in user.js
   
    //res.send(true);
    res.header('x-auth-token', token).send({
        firstname: buyer.firstname,
        email: buyer.email
    });

});
//separate validate function to validate the user
function validateBuyer(buyer) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }
    return Joi.validate(buyer, schema);
}

module.exports = router;