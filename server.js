const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
// const startupDebugger = require('debug')('app:startup');
const app = express();
const auth = require('./routes/auth');

const PORT = process.env.PORT || 8891;
console.log(`Environment: ${process.env.NODE_ENV}`);
// startupDebugger('working');
const products = require('./routes/products');
const buyers = require('./routes/buyers');
const htmlroutes = require('./routes/html-routes')(app);
app.use(express.urlencoded({ extended : true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/products', products);
app.use('/api/buyer', buyers);
app.use('/api/auth', auth);
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
//have to set this environment variable first
//if it doesn't exist then exit the program
//export AlexOutdoor_jwtPrivateKey=mySecureKey
if(!config.get('jwtPrivateKey'))
{
    console.log('FATAL ERROR: jwt private key is not defined');
    process.exit(1);
}

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/alexs-outdoor', { useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Could not connect to MongoDB..', err))
}

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});
 