
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Music'},
        {id: 2, name: 'Tech'},
        {id: 3, name: 'Arts'},
        {id: 4, name: 'Language'},
        {id: 5, name: 'Science'},
        {id: 6, name: 'Business'},
        {id: 7, name: 'Writing'},
        {id: 8, name: 'Culture'},
        {id: 9, name: 'Culinary'},
        {id: 10, name: 'Craft'},
        {id: 11, name: 'Career'},
        {id: 12, name: 'Sports'}
      ])
    })
}
