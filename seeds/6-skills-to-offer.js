exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills_to_offer').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills_to_offer').insert([
        {id: 1, profile_id: 1, skills_id: 8},
        {id: 2, profile_id: 1, skills_id: 13},
        {id: 3, profile_id: 2, skills_id: 8},
        {id: 4, profile_id: 2, skills_id: 9},
        {id: 5, profile_id: 3, skills_id: 3},
        {id: 6, profile_id: 3, skills_id: 24},
        {id: 7, profile_id: 4, skills_id: 19},
        {id: 8, profile_id: 4, skills_id: 4},
        {id: 9, profile_id: 5, skills_id: 9},
        {id: 10, profile_id: 5, skills_id: 18},
        {id: 11, profile_id: 6, skills_id: 22},
        {id: 12, profile_id: 6, skills_id: 5},
        {id: 13, profile_id: 7, skills_id: 12},
        {id: 14, profile_id: 7, skills_id: 13},
        {id: 15, profile_id: 8, skills_id: 16},
        {id: 16, profile_id: 8, skills_id: 22},
        {id: 17, profile_id: 9, skills_id: 2},
        {id: 18, profile_id: 10, skills_id: 10},
        {id: 19, profile_id: 11, skills_id: 2},
        {id: 20, profile_id: 11, skills_id: 3},
        {id: 21, profile_id: 12, skills_id: 17},
        {id: 22, profile_id: 12, skills_id: 18},
        {id: 23, profile_id: 13, skills_id: 1},
        {id: 24, profile_id: 13, skills_id: 3},
        {id: 25, profile_id: 14, skills_id: 9},
        {id: 26, profile_id: 14, skills_id: 3}
      ])
    })
}
