const Burgers = require('../models/burgers');

module.exports = async function FindBurger(req, res) {
  try {
    const burger = await Burgers.findById(req.params.id);
    if (burger) res.status(200).json(burger);
    if (!burger) res.status(404).json({ error: 'Burger not found' });
  } catch (e) {
    res.status(500).json({ error: 'Invalid request' });
  }
};
