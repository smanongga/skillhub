
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'bobbyturner'},
        {id: 2, username: 'antonbarnett'},
        {id: 3, username: 'michaelmatthews'},
        {id: 4, username: 'laurabutler'},
        {id: 5, username: 'nicolebrown'},
        {id: 6, username: 'veronicamoore'},
        {id: 7, username: 'frankrice'},
        {id: 8, username: 'emilyriley'},
        {id: 9, username: 'oliviarodgers'},
        {id: 10, username: 'dereknolan'}
      ])
    })
}
