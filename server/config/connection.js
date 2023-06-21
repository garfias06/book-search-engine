const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://garfias23:mongo123@classactivities.htdjbvu.mongodb.net/googlebooks');

module.exports = mongoose.connection;
