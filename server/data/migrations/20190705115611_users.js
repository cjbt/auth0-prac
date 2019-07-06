
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('users')
};
