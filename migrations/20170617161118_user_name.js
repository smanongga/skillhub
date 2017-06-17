exports.up = knex => knex.schema.table('profiles', table => {
  table.string('user_name')
})

exports.down = knex => knex.schema.dropTable('profiles')
