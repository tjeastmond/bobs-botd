const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/json' }));

// setup routes...
require('./routes/routes')(app);

module.exports = function (port = 3000) {
  return app.listen(port, () => {
    console.log(`[Running] Server running on port ${port}`);
  });
};
