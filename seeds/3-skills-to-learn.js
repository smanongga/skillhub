exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills_to_learn').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills_to_learn').insert([
        {id: 1, profile_id: 2, skill_id: 2},
        {id: 2, profile_id: 2, skill_id: 4},
        {id: 3, profile_id: 6, skill_id: 5},
        {id: 4, profile_id: 4, skill_id: 3},
        {id: 5, profile_id: 3, skill_id: 2},
        {id: 6, profile_id: 2, skill_id: 2},
        {id: 7, profile_id: 6, skill_id: 5},
        {id: 8, profile_id: 6, skill_id: 6},
        {id: 9, profile_id: 6, skill_id: 3},
        {id: 10, profile_id: 7, skill_id: 1}
      ]);
    });
};
