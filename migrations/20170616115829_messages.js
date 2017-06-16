exports.up = knex => knex.schema.createTable('messages', table => {
  table.increments('id').primary()
  table.integer('profile_id').unsigned()
  table.foreign('profile_id').references('profiles.id')
  table.integer('sender_id').unsigned()
  table.foreign('sender_id').references('profiles.id')
  table.text('message', 'mediumtext')
  table.string('subject')
  table.dateTime('time')
})

exports.down = knex => knex.schema.dropTable('messages')