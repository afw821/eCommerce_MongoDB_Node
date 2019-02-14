const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
const startupDebugger = require('debug')('app:startup');
const app = express();


const PORT = process.env.PORT || 8080;
startupDebugger(`Environment: ${process.env.NODE_ENV}`);
const apiroutes = require('./routes/api-routes');
const htmlroutes = require('./routes/html-routes')(app);
app.use(express.urlencoded({ extended : true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/products', apiroutes);
startupDebugger(`Application Name: ${config.get('name')}`);
startupDebugger(`Mail Server: ${config.get('mail.host')}`);
if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/alexs-outdoor', { useNewUrlParser: true})
    .then(() => startupDebugger('Connected to MongoDB'))
    .catch((err) => startupDebugger('Could not connect to MongoDB..', err))
}

app.listen(PORT, () => {
    startupDebugger(`App is listening on PORT: ${PORT}`);
});
 