exports.up = knex => knex.schema.createTable('feedbacks', table => {
  table.increments('id').primary()
  table.integer('profile_id').unsigned()
  table.integer('commenter_id').unsigned()
  table.foreign('commenter_id').references('profiles.id')
  table.text('time')
  table.text('message')
})

exports.down = knex => knex.schema.dropTable('feedbacks')
