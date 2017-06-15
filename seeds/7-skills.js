
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, category_id: 1, name: 'Guitar'},
        {id: 2, category_id: 2, name: 'Javascript'},
        {id: 3, category_id: 3, name: 'Photography'},
        {id: 4, category_id: 1, name: 'Singing'},
        {id: 5, category_id: 2, name: 'Wordpress'},
        {id: 6, category_id: 3, name: 'Painting'}
      ])
    })
}
