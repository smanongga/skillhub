
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, profile_id: 1, sender_id: 3, message: 'Awesome tutorial on Bitorrent.', subject: 'Thanks111 hiking advice.', time: '2011-11-11 19:02:54'},
        {id: 2, profile_id: 6, sender_id: 4, message: 'Tony is such a great teacher! I now use ReactJS for all my projects.', subject: 'Thanks222 hiking advice.', time: '2002-22-22 19:02:54'},
        {id: 3, profile_id: 2, sender_id: 7, message: 'Thanks hiking advice.', subject: 'Thanks333 hiking advice.', time: '2013-03-23 03:33:54'}
      ])
    })
}
