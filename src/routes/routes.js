module.exports = function (app) {
  app.get('/', (_, res) => res.status(200).json({ status: 'OK' }));
  app.get('/burgers', require('./burgerList'));
  app.get('/burgers/:id', require('./findBurger'));
  app.post('/burgers', require('./createBurger'));
  app.delete('/burgers/:id', require('./deleteBurger'));
};
