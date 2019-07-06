const db = require('../data/dbConfig');

const register = user => {
  console.log(user);
  return db('users').insert(user);
};

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

module.exports = {
  register,
  findBy
};
