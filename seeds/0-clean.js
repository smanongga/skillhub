exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  function deleteAll (tableName) {
    return knex(tableName).del()
  }

  return deleteAll('feedbacks')
  .then(() => deleteAll('skills_to_learn'))
  .then(() => deleteAll('skills_to_offer'))
  .then(() => deleteAll('skills'))
  .then(() => deleteAll('messages'))
}
