
module.exports = {
  getCategories,
  addUserToProfile,
  profileExists,
  getProfileById,
  getMessages,
  getSentMessages,
  addMessage,
  updateProfile,
  readMessage
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

function getMessages (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .join('messages', 'messages.profile_id', '=', 'profiles.id')
  .join('profiles as sender', 'messages.sender_id', '=', 'sender.id')
  .select('sender.first_name as firstName', 'sender.last_name as lastName','messages.message', 'messages.time', 'messages.subject', 'messages.id', 'messages.read', 'sender.user_id as senderId')
}

function getSentMessages (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .join('messages', 'messages.sender_id', '=', 'profiles.id')
  .join('profiles as receiver', 'messages.profile_id', '=', 'receiver.id')
  .select('receiver.first_name as firstName', 'receiver.last_name as lastName','messages.message', 'messages.time', 'messages.subject', 'messages.id')
}

function getCategories (connection) {
  return connection('categories')
  .select()
}
