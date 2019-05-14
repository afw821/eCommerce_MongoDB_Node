const { Buyer, validate } = require('../models/Buyer');
const express = require('express');
const router = express.Router();
//api routes for the buyer
router.post('/', async function (req, res) {
    const result = validate(req.body);

    if(result.error) {
        res.status(404).send(result.error.details[0].message);
    }
    
    let buyer = await Buyer.findOne({ email: req.body.email });

    if(buyer) return res.status(400).send('User Already Registered');

    buyer = new Buyer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
       
    });
    //save the new user to the database
    await buyer.save();

    res.send({
        firstname: buyer.firstname,
        lastname: buyer.lastname,
        email: buyer.email
    });
});
router.get('/', async function (req, res) {

    const buyers = await Buyer.find();
   
    try{
        res.send(buyers);
    } catch (err){
        console.log(err);
    }
});
router.get('/:id', async function (req, res) {

    const buyer = await Buyer.findById( req.params.id );

    if(!buyer) return res.status(404).send('The buyer with the given id does not exist');

    res.send(buyer);
});

module.exports = router;