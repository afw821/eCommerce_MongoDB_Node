const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
const startupDebugger = require('debug')('app:startup');
const app = express();


const PORT = process.env.PORT || 8082;
console.log(`Environment: ${process.env.NODE_ENV}`);
startupDebugger('working');
const apiroutes = require('./routes/api-routes');
const apibuyer = require('./routes/api-buyer-routes');
const htmlroutes = require('./routes/html-routes')(app);
app.use(express.urlencoded({ extended : true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/products', apiroutes);
app.use('/api/buyer', apibuyer);
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
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
 