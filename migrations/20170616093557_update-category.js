
exports.up = knex => Promise.all([
  knex.schema.table('categories', table => {
    table.dropColumn('skill_id')
  }),

  knex.schema.table('skills', table => {
    table.integer('category_id').unsigned()
    table.foreign('category_id').references('skills.id')
  })
])

exports.down = knex => Promise.all([
  knex.schema.table('categories', table => {
    table.foreign('skill_id').references('skills.id')
  }),
  knex.schema.table('skills', table => {
    table.dropForeign('category_id')
  })
])
