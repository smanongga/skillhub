
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, password: 'password123',username: 'samM'},
        {id: 2, password: 'password123',username: 'rob'},
        {id: 3, password: 'password123',username: 'rory'},
        {id: 4, password: 'password123',username: 'julie'},
        {id: 5, password: 'password123',username: 'samH'},
        {id: 6, password: 'password123',username: 'tony'},
        {id: 7, password: 'password123',username: 'don'}
      ]);
    });
};
