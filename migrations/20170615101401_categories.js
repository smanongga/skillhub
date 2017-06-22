exports.up = knex => knex.schema.createTable('categories', table => {
  table.increments('id').primary()
  table.integer('skill_id').unsigned()
  table.string('name')
})

exports.down = knex => knex.schema.dropTable('categories')
