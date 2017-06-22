
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, profile_id: 5, sender_id: 3, message: 'I am interested in learning from you.', subject: 'Hello', time: '2011-11-11 19:02:54', read: 'false'},
        {id: 2, profile_id: 5, sender_id: 2, message: 'I am interested in teaching you', subject: 'Hello', time: '2011-11-11 19:02:54', read: 'false'},
        {id: 3, profile_id: 6, sender_id: 1, message: 'I am interested in teaching you', subject: 'Hello', time: '2002-22-22 19:02:54', read: 'false'},
        {id: 4, profile_id: 2, sender_id: 7, message: 'I am interested in teaching you', subject: 'Hello', time: '2013-03-23 03:33:54', read: 'false'}
      ])
    })
}
