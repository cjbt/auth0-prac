const db = require('../../data/dbConfig');

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

const findAllBy = filter => {
  return db('users').where(filter);
};

const getAll = () => {
  return db('users');
};

module.exports = {
  findBy,
  findAllBy,
  getAll
};
