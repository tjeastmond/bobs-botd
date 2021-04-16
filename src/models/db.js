const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect();

module.exports = mongoose;
