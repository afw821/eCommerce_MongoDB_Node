
const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
const startupDebugger = require('debug')('app:startup');
const app = express();
require('./routes/api-routes');
require('./routes/html-routes');

const PORT = process.env.PORT || 8080;
startupDebugger(`Environment: ${process.env.NODE_ENV}`);

app.use(express.urlencoded({ extended : true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/MLBDB', { useNewUrlParser: true})
}

app.listen(PORT, () => {
    startupDebugger(`App is listening on PORT: ${PORT}`);
});
 