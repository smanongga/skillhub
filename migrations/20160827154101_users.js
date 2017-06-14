exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('email')
  table.binary('password')
  table.string('username')
})

exports.down = knex => knex.schema.dropTable('users')
