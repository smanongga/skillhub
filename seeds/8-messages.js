
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, profile_id: 5, sender_id: 3, message: 'Message from user 3 to user 13.', subject: 'Thanks111 hiking advice.', time: '2011-11-11 19:02:54', read: 'false'},
        {id: 2, profile_id: 5, sender_id: 2, message: 'Message from user 2 to user 1.', subject: 'Thanks again 111 hiking advice.', time: '2011-11-11 19:02:54', read: 'false'},
        {id: 3, profile_id: 6, sender_id: 16, message: 'Message from user 1 to user 6', subject: 'Thanks222 hiking advice.', time: '2002-22-22 19:02:54', read: 'false'},
        {id: 4, profile_id: 2, sender_id: 16, message: 'Message from user 7 to user 2.', subject: 'Thanks333 hiking advice.', time: '2013-03-23 03:33:54', read: 'false'}
      ])
    })
}
