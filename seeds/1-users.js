
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, password: null, username: 'samM'},
        {id: 2, password: null, username: 'rob'},
        {id: 3, password: null, username: 'rory'},
        {id: 4, password: null, username: 'julie'},
        {id: 5, password: null, username: 'samH'},
        {id: 6, password: null, username: 'tony'},
        {id: 7, password: null, username: 'don'}
      ])
    })
}
