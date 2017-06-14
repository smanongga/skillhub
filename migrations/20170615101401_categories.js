exports.up = knex => knex.schema.createTable('categories', table => {
  table.increments('id').primary()
  table.foreign('skill_id').references('skills.id')
  table.string('name')
})

exports.down = knex => knex.schema.dropTable('categories')
