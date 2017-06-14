exports.up = knex => knex.schema.createTable('feedbacks', table => {
  table.increments('id').primary()
  table.foreign('profile_id').references('profiles.id')
  table.foreign('commenter_id').references('profiles.id')
  table.text('message', 'mediumtext')
})

exports.down = knex => knex.schema.dropTable('feedbacks')
