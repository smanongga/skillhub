
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
        {id: 6, category_id: 3, name: 'Painting'},
        {id: 7, category_id: 4, name: 'Translation'},
        {id: 8, category_id: 4, name: 'German Language'},
        {id: 9, category_id: 4, name: 'Basic French'},
        {id: 10, category_id: 5, name: 'Basic Chemistry'},
        {id: 11, category_id: 5, name: 'DNA Sequencing'},
        {id: 12, category_id: 6, name: 'Startup Tuition'},
        {id: 13, category_id: 6, name: 'Accounting'},
        {id: 14, category_id: 7, name: 'Script Writing'},
        {id: 15, category_id: 8, name: 'Dumpling Making'},
        {id: 16, category_id: 8, name: 'Baking Pavlova'},
        {id: 17, category_id: 9, name: 'Woodwork'},
        {id: 18, category_id: 9, name: 'Pottery'},
        {id: 19, category_id: 9, name: 'Basket Weaving'},
        {id: 20, category_id: 10, name: 'CV Writing'},
        {id: 21, category_id: 10, name: 'Interview Training'},
        {id: 22, category_id: 11, name: 'Running Coach'},
        {id: 23, category_id: 11, name: 'Crossfit'},
        {id: 24, category_id: 12, name: 'Short Films'},
        {id: 25, category_id: 12, name: 'Drone Filming'}
      ])
    })
}
