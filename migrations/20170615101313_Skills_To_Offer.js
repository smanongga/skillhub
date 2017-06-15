
exports.up = knex => knex.schema.createTable('skills_to_offer', table => {
  table.increments('id').primary()
  table.integer('profile_id').unsigned()
  table.foreign('profile_id').references('profiles.id')
  table.integer('skills_id').unsigned()
})

exports.down = knex => knex.schema.dropTable('skills_to_offer')
