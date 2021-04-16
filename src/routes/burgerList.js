const Burgers = require('../models/burgers');

module.exports = async function BurgerList(_, res) {
  const burgers = await Burgers.find();
  res.status(200).json(burgers);
};
