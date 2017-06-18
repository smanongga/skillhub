
module.exports = {
  getCategories,
  addUserToProfile,
  profileExists,
  getProfileById,
  updateProfile,
  getPeopleLearn,
  getPeopleOffer,
  getCategoriesAndSkills,
  getUsersProfile,
  getMessages,
  addMessage,
  readMessage,
  getLocations
}

function addMessage (conn, messageData) {
  return conn('messages')
 .insert({
   sender_id: messageData.sender_id,
   profile_id: messageData.profile_id,
   subject: messageData.subject,
   message: messageData.message,
   time: messageData.time,
   read: messageData.read
 })
}

function readMessage (conn, readId) {
  return conn('messages')
  .where('id', readId.id)
  .update({
    read: 'true'
  })
}

function addUserToProfile (conn, id, username, email) {
  return conn('profiles')
  .where('auth_id', id)
  .insert({
    auth_id: id,
    user_name: username,
    email: email
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
    bio: profile.bio,
    photo_url: profile.profilePic,
    location_city: profile.locationCity
  })
}

function getProfileById (id, connection) {
  return Promise.all([
    getProfile(id, connection),
    getSkillsToOffer(id, connection),
    getSkillsToLearn(id, connection)
  ])
.then(([result1, result2, result3]) => {
  // function getFields (input, field) {
  //   var output = []
  //   for (var i = 0; i < input.length; ++i)
  //     output.push(input[i][field])
  //   return output
  // }
  //
  // const teach = getFields(result2, 'name')
  // const learn = getFields(result3, 'name')

  const data = {
    firstName: result1[0].firstName,
    lastName: result1[0].lastName,
    bio: result1[0].bio,
    locationCity: result1[0].locationCity,
    teach: result2,
    learn: result3
  }
  console.log(data)
  return data
})
.catch((err) => {
  console.log(err)
})
}

function getUsersProfile (id, connection) {
  return connection('profiles')
  .select('id', 'user_id as userId', 'user_name as userName', 'first_name as firstName', 'last_name as lastName', 'bio', 'photo_url as photoUrl', 'location_city as locationCity', 'email')
  .where('auth_id', id)
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

// function getFeedbacks (id, connection) {
//   return connection('profiles')
//   .where('profiles.id', '=', id)
//   .join('feedbacks', 'feedbacks.profile_id', '=', 'profiles.id')
//   .join('profiles as commenter', 'feedbacks.commenter_id', '=', 'commenter.id')
//   .select('commenter.first_name as firstName', 'feedbacks.message', 'commenter.photo_url as photoUrl')
// }

function getMessages (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .join('messages', 'messages.profile_id', '=', 'profiles.id')
  .join('profiles as sender', 'messages.sender_id', '=', 'sender.id')
  .select('sender.first_name as firstName', 'sender.last_name as lastName', 'messages.message', 'messages.time', 'messages.subject', 'messages.id', 'messages.read')
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

function getLocations (connection) {
  return connection('locations')
  .select('location')
}
