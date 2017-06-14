
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, skill_id: 1, name: 'Music'},
        {id: 2, skill_id: 2, name: 'Web Development'},
        {id: 3, skill_id: 3, name: 'Art and Design'}
      ])
    })
}
