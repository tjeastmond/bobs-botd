const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(
  'mongodb+srv://ecorpAdmin:Wu@^s!SUH@aZ1vA7@cluster0.ojpil.mongodb.net/lunchbox?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

module.exports = mongoose;
