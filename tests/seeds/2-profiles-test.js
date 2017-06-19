exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 1, email: 'aardvark@skillHub.com', first_name: 'arrd', last_name: 'vark', bio: 'I can teach arrdy', photo_url: '', location_city: 'Arrdland'},
        {id: 2, user_id: 2, email: 'capybara@skillsHub.com', first_name: 'capy', last_name: 'bara', bio: 'I can teach capy tech', photo_url: '', location_city: 'Capytown'}
      ])
    })
}
