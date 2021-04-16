const axios = require('axios');

const burgers = [
  `"Sweet Chili O' Mine" Burger`,
  `"Kales From the Crypt" Burger`,
  `"Grandpa Muenster" Burger (10% Senior Discount)`,
  `She's A Super Leek" Burger`,
  `"I Am Mad About Saffron" Burger (Made with no saffron)`,
  `"Foot Feta-ish" Burger`,
];

async function generate(port) {
  const endpoint = `http://localhost:${port}/burgers`;
  for (let i = 0; i < burgers.length; ++i) {
    const params = { name: burgers[i], price: 6, approved: true };
    axios.post(endpoint, params, { 'Content-Type': 'application/json' });
  }
}

generate(3000);
