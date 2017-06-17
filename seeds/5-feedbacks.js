
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedbacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedbacks').insert([
        {id: 1, profile_id: 1, commenter_id: 3, message: 'Awesome tutorial on Bitorrent.'},
        {id: 2, profile_id: 6, commenter_id: 4, message: 'Tony is such a great teacher! I now use ReactJS for all my projects.'},
        {id: 3, profile_id: 2, commenter_id: 7, message: 'Thanks hiking advice.'}
      ])
    })
}
