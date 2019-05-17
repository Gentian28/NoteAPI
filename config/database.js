const config = require('./config');
const mongoose = require('mongoose');

// Connecting to the database
module.exports = () => {
    mongoose.connect(config.connectionString, {
        useCreateIndex: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

    mongoose.Promise = global.Promise;
}
