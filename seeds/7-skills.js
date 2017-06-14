
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, name: 'Guitar'},
        {id: 2, name: 'Javascript'},
        {id: 3, name: 'Photography'}
      ])
    })
}
