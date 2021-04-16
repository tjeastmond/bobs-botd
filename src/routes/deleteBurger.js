const Burgers = require('../models/burgers');

module.exports = async function DeleteBurger(req, res) {
  const response = await Burgers.deleteOne({ _id: req.params.id });
  res.status(200).send(response);
};
