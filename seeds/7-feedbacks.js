
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedbacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('feedbacks').insert([
        {id: 1, profile_id: 1, commenter_id: 3, message: 'Feedback to Bobby from Michael', time: '2002-12-12 19:02:54',},
        {id: 2, profile_id: 2, commenter_id: 4, message: 'Feedback to Anton from Laura', time: '2002-12-12 19:02:54',},
        {id: 3, profile_id: 3, commenter_id: 1, message: 'Feedback to Michael from Bobby', time: '2002-12-12 19:02:54',},
        {id: 4, profile_id: 4, commenter_id: 3, message: 'Feedback to Laura from Michael', time: '2002-12-12 19:02:54',},
        {id: 5, profile_id: 5, commenter_id: 4, message: 'Feedback to Nicole from Laura', time: '2002-12-12 19:02:54',},
        {id: 6, profile_id: 6, commenter_id: 2, message: 'Feedback to Veronica from Anton', time: '2002-12-12 19:02:54',},
        {id: 7, profile_id: 7, commenter_id: 2, message: 'Feedback to Frank from Anton', time: '2002-12-12 19:02:54',},
        {id: 8, profile_id: 8, commenter_id: 5, message: 'Feedback to Emily from Nicole', time: '2002-12-12 19:02:54',},
        {id: 9, profile_id: 9, commenter_id: 2, message: 'Feedback to Olivia from Anton', time: '2002-12-12 19:02:54',},
        {id: 10, profile_id: 10, commenter_id: 5, time: '2002-12-12 19:02:54',}
      ])
    })
}
