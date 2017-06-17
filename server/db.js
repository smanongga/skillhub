
module.exports = {
  getCategories,
  addUserToProfile,
  profileExists,
  getProfileById,
  updateProfile,
  getPeopleLearn,
  getPeopleOffer,
  getCategoriesAndSkills
}

function addUserToProfile (conn, id) {
  return conn('profiles')
  .where('auth_id', id)
  .insert({ auth_id: id
  })
}

function profileExists (conn, id) {
  return conn('profiles')
  .select()
  .where('auth_id', id)
}

function updateProfile (conn, profile, id) {
  return conn('profiles')
  .where('auth_id', id)
  .update({
    first_name: profile.firstName,
    last_name: profile.lastName,
    email: profile.email,
    bio: profile.bio,
    photo_url: profile.photoUrl,
    location_city: profile.location
  })
}

function getProfileById (id, connection) {
  return Promise.all([
    getProfile(id, connection),
    getSkillsToOffer(id, connection),
    getSkillsToLearn(id, connection),
    getFeedbacks(id, connection)
  ])
.then(([result1, result2, result3, result4]) => {
  const data = {
    profile: result1,
    skillsToOffer: result2,
    skillsToLearn: result3,
    feedback: result4
  }
  return data
})
.catch((err) => {
  console.log(err)
})
}

function getProfile (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .select('id', 'user_id as userId', 'first_name as firstName', 'last_name as lastName', 'bio', 'photo_url as photoUrl', 'location_city as locationCity', 'email')
}

function getSkillsToLearn (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .join('skills_to_learn', 'skills_to_learn.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_learn.skills_id', '=', 'skills.id')
  .select('skills.name')
}

function getSkillsToOffer (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .join('skills_to_offer', 'skills_to_offer.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_offer.skills_id', '=', 'skills.id')
  .select('skills.name')
}

function getFeedbacks (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .join('feedbacks', 'feedbacks.profile_id', '=', 'profiles.id')
  .join('profiles as commenter', 'feedbacks.commenter_id', '=', 'commenter.id')
  .select('commenter.first_name as firstName', 'feedbacks.message', 'commenter.photo_url as photoUrl')
}

function getCategories (connection) {
  return connection('categories')
  .select()
}
function getCategoriesAndSkills (connection) {
  return connection('categories')
  .join('skills', 'skills.category_id', '=', 'categories.id')
  .join('profiles', 'skills.id')
  .select('categories.id', 'skills.id as skillId', 'categories.name', 'skills.name', 'categories.name as catName')
}

function getPeopleLearn (connection) {
  return connection('profiles')
  .join('skills_to_learn', 'skills_to_learn.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_learn.skills_id', '=', 'skills.id')
  .join('categories', 'skills.category_id', '=', 'categories.id')
  .select('profiles.id', 'user_id as userId', 'first_name as firstName', 'last_name as lastName', 'bio', 'photo_url as photoUrl', 'location_city as locationCity', 'email', 'skills.name as skills_name', 'categories.name as cat_name', 'skills.category_id as skills_cat_id', 'categories.id as cat_id')
}

function getPeopleOffer (connection) {
  return connection('profiles')
  .join('skills_to_offer', 'skills_to_offer.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_offer.skills_id', '=', 'skills.id')
  .join('categories', 'skills.category_id', '=', 'categories.id')
  .select('profiles.id', 'user_id as userId', 'first_name as firstName', 'last_name as lastName', 'bio', 'photo_url as photoUrl', 'location_city as locationCity', 'email', 'skills.name as skills_name', 'categories.name as cat_name', 'skills.category_id as skills_cat_id', 'categories.id as cat_id')
}
