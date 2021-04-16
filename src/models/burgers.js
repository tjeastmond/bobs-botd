const mongoose = require('./db');

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    approved: { type: Boolean, required: true, default: false },
    price: { type: Number, required: true, default: 6 },
  },
  {
    timestamps: true,
  },
);

schema.statics.createBurger = async function ({ name, approved, price }) {
  return await this.create({ name, approved, price });
};

const Burger = mongoose.model('Burgers', schema);

module.exports = Burger;
