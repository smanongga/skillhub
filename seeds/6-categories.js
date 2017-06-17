
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Music'},
        {id: 2, name: 'Tech'},
        {id: 3, name: 'Arts'}
      ])
    })
}
