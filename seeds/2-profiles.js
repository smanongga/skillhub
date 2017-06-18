exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 12, email: 'samM@skillHub.com', first_name: 'Sam', last_name: 'Manongga', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros massa, viverra vel nunc eu, varius lobortis nisl. Duis magna odio, pulvinar vitae neque id, accumsan accumsan ipsum. In euismod lacus vitae libero accumsan, vitae ultricies velit mattis. Ut non ipsum faucibus, auctor sem non, ornare quam. Nunc lacus tortor, porta et euismod eget, facilisis sit amet risus. Nam sed eleifend diam. Maecenas vel felis a purus egestas malesuada sit amet et est.', photo_url: '', location_city: 'Wellington'},
        {id: 2, user_id: 2, email: 'rob@skillsHub.com', first_name: 'Rob', last_name: 'Fisher', bio: 'I can teach Guitar', photo_url: '', location_city: 'Auckland'},
        {id: 3, user_id: 3, email: 'rory@skillsHub.com', first_name: 'Rory', last_name: 'MacDonald', bio: 'I want to learn baking', photo_url: '', location_city: 'Hamilton'},
        {id: 4, user_id: 4, email: 'julie@skillsHub.com', first_name: 'Julie', last_name: 'Crutchley', bio: 'I can teach drums', photo_url: '', location_city: 'Christchurch'},
        {id: 5, user_id: 5, email: 'samH@skillsHub.com', first_name: 'Sam', last_name: 'Houlahan', bio: 'I can teach paintball', photo_url: '', location_city: 'Auckland'},
        {id: 6, user_id: 6, email: 'tony@skillsHub.com', first_name: 'Tony', last_name: 'Luisi', bio: 'I want to learn Saxaphone', photo_url: '', location_city: 'Auckland'},
        {id: 7, user_id: 7, email: 'don@skillsHub.com', first_name: 'Don', last_name: 'Smith', bio: 'I want to learn yoga', photo_url: '', location_city: 'Auckland'}
      ])
    })
}
