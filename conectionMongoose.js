const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);

async function connectToDatabase(url) {
    return mongoose.connect(url);
}

module.exports = connectToDatabase;
