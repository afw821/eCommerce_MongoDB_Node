
const Buyer = require('../models/Buyer');
const express = require('express');
const router = express.Router();

//api routes for the buyer
router.post('/', async function (req, res) {

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
    // Buyer.find({})
    // .then(function (data) {
    //     res.json(data);
    // })
    // .then(function (err) {
    //     res.json(err);
    // });
    const buyers = await Buyer.find();
   
    try{
        res.send(buyers);
    } catch (err){
        console.log(err);
    }
});
router.get('/:id', function (req, res) {
    Buyer.find({ _id: req.params.id })
    .then(function (data) {
        res.json(data);
    })
    .catch(function (err) {
        res.json(err);
    });
});

module.exports = router;