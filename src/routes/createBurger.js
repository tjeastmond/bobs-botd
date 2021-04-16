const Burgers = require('../models/burgers');

module.exports = async function CreateBurger(req, res) {
  const record = await Burgers.createBurger({
    approved: req.body.approved || false,
    name: req.body.name,
    price: req.body.price,
  });

  res.status(200).json(record);
};
