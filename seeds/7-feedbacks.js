
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedbacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedbacks').insert([
        {id: 1, profile_id: 1, commenter_id: 3, message: 'Awesome tutorial on Bitorrent Cheers Sam, from Rory.'},
        {id: 2, profile_id: 6, commenter_id: 4, message: 'Tony is such a great teacher! I now use ReactJS for all my projects. Thanks Tony from Julie'},
        {id: 3, profile_id: 2, commenter_id: 1, message: 'Thanks hiking advice. Cheers Rob, from Sam'},
        {id: 4, profile_id: 4, commenter_id: 3, message: 'Great teacher! Thanks Julie, from Rory'},
        {id: 5, profile_id: 5, commenter_id: 4, message: 'Thanks for the drum lessons. T Sam, F Julie'},
        {id: 6, profile_id: 6, commenter_id: 2, message: 'Would love to learn with you again. T Tony, F Rob'},
        {id: 7, profile_id: 3, commenter_id: 2, message: 'Great meeting you. T Rory F Rob'},
        {id: 8, profile_id: 2, commenter_id: 5, message: 'Great meeting up with you last week. T Rob F Sam'},
        {id: 9, profile_id: 4, commenter_id: 2, message: 'Thanks for all the great advice. T Julie F Rob'}
      ])
    })
}
