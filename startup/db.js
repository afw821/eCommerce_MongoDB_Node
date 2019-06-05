const mongoose = require('mongoose');

//Connecting to Mongoose/ Mongo DB
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/alexs-outdoor', { useNewUrlParser: true })
        .then(function () {
            console.log('Connected to MongoDB')
        }).catch(function (err) {
            console.log('Could not connect to MongoDB..', err)
        });

}