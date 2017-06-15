
exports.up = knex => knex.schema.createTable('skills_to_offer', table => {
  table.increments('id').primary()
  table.integer('profile_id').unsigned()
  table.foreign('profile_id').references('profiles.id')
  table.integer('skills_id').unsigned()
<<<<<<< HEAD
  table.foreign('skills_id').references('skills.id')
=======
>>>>>>> d00b339961d047119b73527e756ae1d2c5b7c75c
})

exports.down = knex => knex.schema.dropTable('skills_to_offer')
