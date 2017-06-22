exports.up = knex => Promise.all([
  knex.schema.table('skills_to_learn', table => {
    table.foreign('skills_id').references('skills.id')
  }),
  knex.schema.table('skills_to_offer', table => {
    table.foreign('skills_id').references('skills.id')
  }),
  knex.schema.table('categories', table => {
    table.foreign('skill_id').references('skills.id')
  })
])

exports.down = knex => Promise.all([
  knex.schema.table('skills_to_learn', table => {
    table.dropForeign('skills_id')
  }),
  knex.schema.table('skills_to_offer', table => {
    table.dropForeign('skills_id')
  }),
  knex.schema.table('categories', table => {
    table.dropForeign('skill_id')
  })
])
