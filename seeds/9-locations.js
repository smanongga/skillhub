exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 2, location: 'Auckland'},
        {id: 3, location: 'Waikato'},
        {id: 4, location: 'Bay of Plenty'},
        {id: 5, location: 'Gisborne'},
        {id: 6, location: 'Hawkes Bay'},
        {id: 7, location: 'Taranaki'},
        {id: 8, location: 'Wanganui'},
        {id: 9, location: 'Manawatu'},
        {id: 10, location: 'Wairarapa'},
        {id: 11, location: 'Wellington'},
        {id: 12, location: 'Nelson'},
        {id: 13, location: 'Malborough'},
        {id: 14, location: 'Canterbury'},
        {id: 15, location: 'Timaru'},
        {id: 16, location: 'Otago'},
        {id: 17, location: 'Southland'}
      ])
    })
}
