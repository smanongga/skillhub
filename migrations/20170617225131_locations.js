exports.up = knex => knex.schema.createTable('locations', table => {
  table.increments('id').primary()
  table.string('location')
})

exports.down = knex => knex.schema.dropTable('locations')
