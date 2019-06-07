const config = require('config');
const express = require('express');
const path = require('path');
const app = express();
const auth = require('./routes/auth');
const PORT = process.env.PORT || 8891;
console.log(`Environment: ${process.env.NODE_ENV}`);
// const products = require('./routes/products');
// const buyers = require('./routes/buyers');
const htmlroutes = require('./routes/html-routes')(app);
//Middleware functions
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/products', products);
// app.use('/api/buyer', buyers);
// app.use('/api/auth', auth);
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
//have to set this environment variable first
//if it doesn't exist then exit the program
//export AlexOutdoor_jwtPrivateKey=mySecureKey
if (!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwt private key is not defined');
    process.exit(1);
}
//Connecting to Mongoose/ Mongo DB

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});
