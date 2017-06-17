
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'samM'},
        {id: 2, username: 'rob'},
        {id: 3, username: 'rory'},
        {id: 4, username: 'julie'},
        {id: 5, username: 'samH'},
        {id: 6, username: 'tony'},
        {id: 7, username: 'don'}
      ])
    })
}
