exports.up = knex => knex.schema.createTable('profiles', table => {
  table.increments('id').primary()
  table.integer('user_id').unsigned()
  table.foreign('user_id').references('users.id')
  table.string('first_name')
  table.string('last_name')
  table.string('bio')
  table.string('photo_url')
  table.string('location_city')
  table.string('email')
})

exports.down = knex => knex.schema.dropTable('profiles')