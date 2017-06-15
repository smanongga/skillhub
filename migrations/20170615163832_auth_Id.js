exports.up = knex => knex.schema.table('profiles', table => {
  table.binary('auth_id')
})

exports.down = knex => knex.schema.dropTable('profiles')
