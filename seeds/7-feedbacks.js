
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedbacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedbacks').insert([
        {id: 1, profile_id: 1, commenter_id: 3, message: 'Bobby is such a great German teacher. Highly recommend him!', time: '2017-6-5 19:02:54',},
        {id: 2, profile_id: 2, commenter_id: 4, message: 'Anton is such a great teacher. Highly recommend!', time: '2017-2-5 11:02:54',},
        {id: 3, profile_id: 3, commenter_id: 1, message: 'Thanks Michael! Great lesson', time: '2017-4-4 14:02:54',},
        {id: 4, profile_id: 4, commenter_id: 3, message: 'Thanks Laura, great lesson', time: '2017-3-7 12:02:54',},
        {id: 5, profile_id: 5, commenter_id: 4, message: 'Nicole is great to learn from. Definitely recommend!', time: '2017-5-5 19:02:54',},
        {id: 6, profile_id: 6, commenter_id: 2, message: 'Thanks Veronica, great lesson', time: '2017-1-1 19:02:54',},
        {id: 7, profile_id: 7, commenter_id: 2, message: 'Frank is great!', time: '2017-5-4 16:02:54',},
        {id: 9, profile_id: 9, commenter_id: 2, message: 'Highly recommended!', time: '2017-3-4 19:05:54',},
        {id: 10, profile_id: 10, commenter_id: 5, message: 'Great lesson!', time: '2017-3-6 18:03:54',}
      ])
    })
}
