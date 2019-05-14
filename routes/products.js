const Product = require('../models/Product')
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    const products = await Product.find();
    try{
        res.send(products);
    } catch (err){
        console.log(err);
    }
});

router.post('/', async function (req, res) {

    let product = new Product({
        productname: req.body.productname,
        department: req.body.department,
        imgurl: req.body.imgurl,
        size: req.body.size,
        description: req.body.description,
        price: req.body.price,
        stockquantity: req.body.stockquantity,
        productId: req.body.productId
    });

    product  = await product.save();
    res.send(product);
});

router.get('/:id', async function (req, res) {
    const product = await Product.findById(req.params.id);

    if(!product) return res.status(404).send('The Product with the given Id was not found');

    res.send(product);
});
router.get('/department/:department', async function (req, res) {
  
    const product = await Product.find({ department: req.params.department });
    
    if(product.length === 0) return res.status(404).send('The given department does not exist or is not in stock with products');
    
    res.send(product);
});

router.get('/department/:department/department/:department', async function (req, res) {

    const products = await Product.find()
    .or( [ { department: 'Sporting' }, { department: 'Leisure' } ] );

    if(products.length === 0) return res.status(404).send('The given department(s) does not exist or is not in stock with products');

    res.send(products);
   
});
router.put('/:id', async function (req, res) {

    const product = await Product.findByIdAndUpdate(req.params.id,
        { 
            productname: req.body.productname,
            department: req.body.department,
            imgurl: req.body.imgurl,
            size: req.body.size,
            description: req.body.description,
            price: req.body.price,
            stockquantity: req.body.stockquantity,
            productId: req.body.productId
        }, { new: true });
    
      if (!product) return res.status(404).send('The product with the given ID was not found.');

      res.send(product);
});

module.exports = router;

