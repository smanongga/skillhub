
module.exports = {
  getCategories,
  addUserToProfile,
  profileExists,
  getOtherProfileById,
  getOwnProfile,
  updateProfile,
  getCategoriesAndSkills,
  getUsersProfile,
  getMessages,
  getSentMessages,
  addMessage,
  readMessage,
  getLocations,
  filterSkillsToOffer,
  filterSkillsToLearn,
  getSkills,
  insertSkillsToOffer,
  insertSkillsToLearn,
  getFeedback,
  addFeedback
}

const _ = require('lodash')

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

function insertSkillsToOffer (conn, skills, authId) {
  return getProfileIdByAuthId(conn, authId)
  .then((result) => {
    const profileId = result[0].id
    const skillsWithProfileId = skills.map((skill) => {
      return {
        profile_id: profileId,
        skills_id: skill.id
      }
    })
    return conn('skills_to_offer')
      .insert(skillsWithProfileId)
  })
}

function insertSkillsToLearn (conn, skills, authId) {
  return getProfileIdByAuthId(conn, authId)
  .then((result) => {
    const profileId = result[0].id
    const skillsWithProfileId = skills.map((skill) => {
      return {
        profile_id: profileId,
        skills_id: skill.id
      }
    })
    return conn('skills_to_learn')
      .insert(skillsWithProfileId)
  })
}

function getProfileIdByAuthId (conn, authId) {
  return conn('profiles')
  .where('auth_id', authId)
  .select('id')
}

function getOtherProfileById (id, connection) {
  return Promise.all([
    getProfile(id, connection),
    getSkillsToOffer(id, connection),
    getSkillsToLearn(id, connection)
  ])
.then(([result1, result2, result3]) => {
  const data = {
    firstName: result1[0].firstName,
    lastName: result1[0].lastName,
    bio: result1[0].bio,
    locationCity: result1[0].locationCity,
    photoUrl: result1[0].photoUrl,
    teach: result2,
    learn: result3
  }
  return data
})
  .catch((err) => {
    console.log(err)
  })
}

function getOwnProfile (id, connection) {
  return Promise.all([
    getUsersProfile(id, connection),
    getSkillsToLearnByAuthId(id, connection),
    getSkillsToOfferByAuthId(id, connection)
  ])
  .then(([result1, result2, result3]) => {
    const data = {
      id: result1[0].id,
      firstName: result1[0].firstName,
      lastName: result1[0].lastName,
      email: result1[0].email,
      bio: result1[0].bio,
      locationCity: result1[0].locationCity,
      photoUrl: result1[0].photoUrl,
      teach: result2,
      learn: result3
    }
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
function getSkillsToLearnByAuthId (id, connection) {
  return connection('profiles')
  .where('auth_id', id)
  .join('skills_to_learn', 'skills_to_learn.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_learn.skills_id', '=', 'skills.id')
  .select('skills.name')
}
function getSkillsToOfferByAuthId (id, connection) {
  return connection('profiles')
  .where('auth_id', id)
  .join('skills_to_offer', 'skills_to_offer.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_offer.skills_id', '=', 'skills.id')
  .select('skills.name')
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

function getMessages (id, connection) {
  return connection('profiles')
  .where('profiles.auth_id', '=', id)
  .join('messages', 'messages.profile_id', '=', 'profiles.id')
  .join('profiles as sender', 'messages.sender_id', '=', 'sender.id')
  .select('sender.first_name as firstName', 'sender.last_name as lastName', 'messages.message', 'messages.time', 'messages.subject', 'messages.id', 'messages.read', 'sender.id as senderId', 'messages.profile_id as receiverId')
}

function getFeedback (id, connection) {
  return connection('profiles')
  .where('profiles.id', '=', id)
  .join('feedbacks', 'feedbacks.profile_id', '=', 'profiles.id')
  .join('profiles as commenter', 'feedbacks.commenter_id', '=', 'commenter.id')
  .select('commenter.first_name as firstName', 'commenter.last_name as lastName', 'feedbacks.message', 'feedbacks.id', 'commenter.id as commenterId', 'feedbacks.profile_id as receiverId')
}

function getSentMessages (id, connection) {
  return connection('profiles')
  .where('profiles.auth_id', '=', id)
  .join('messages', 'messages.sender_id', '=', 'profiles.id')
  .join('profiles as receiver', 'messages.profile_id', '=', 'receiver.id')
  .select('receiver.first_name as firstName', 'receiver.last_name as lastName', 'messages.message', 'messages.time', 'messages.subject', 'messages.id')
}

function addMessage (messageData, conn) {
  return conn('profiles')
    .where('profiles.auth_id', '=', messageData.userId)
    .select('profiles.id as userId')
    .then(result => {
      return conn('messages')
      .insert({
        sender_id: result[0].userId,
        profile_id: messageData.profile_id,
        subject: messageData.subject,
        message: messageData.message,
        time: messageData.time,
        read: messageData.read
      })
    })
}

function addFeedback (feedbackData, conn) {
  return conn('profiles')
    .where('profiles.auth_id', '=', feedbackData.userId)
    .select('profiles.id as userId')
    .then(result => {
      return conn('feedbacks')
      .insert({
        commenter_id: result[0].userId,
        profile_id: feedbackData.profile_id,
        message: feedbackData.message,
        time: feedbackData.time
      })
    })
}

function readMessage (conn, readId) {
  return conn('messages')
  .where('id', readId.id)
  .update({
    read: 'true'
  })
}

function getCategories (connection) {
  return connection('categories')
  .select()
}

function getSkills (connection) {
  return connection('skills')
  .select()
}

function getCategoriesAndSkills (connection) {
  return connection('categories')
  .join('skills', 'skills.category_id', '=', 'categories.id')
  .join('profiles', 'skills.id')
  .select('categories.id', 'skills.id as skillId', 'categories.name', 'skills.name', 'categories.name as catName')
}

function filterSkillsToOffer (conn, id) {
  return conn('profiles')
  .join('skills_to_offer', 'skills_to_offer.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_offer.skills_id', '=', 'skills.id')
  .join('categories', 'skills.category_id', '=', 'categories.id')
  .where('categories.name', id)
  .select('profiles.id', 'user_id as userId', 'first_name as firstName', 'last_name as lastName', 'bio', 'photo_url as photoUrl', 'location_city as locationCity', 'email', 'skills.name as skills_name', 'categories.name as cat_name', 'skills.category_id as skills_cat_id', 'categories.id as cat_id')
  .then(formatProfiles)
}

function filterSkillsToLearn (connection, id) {
  return connection('profiles')
  .join('skills_to_learn', 'skills_to_learn.profile_id', '=', 'profiles.id')
  .join('skills', 'skills_to_learn.skills_id', '=', 'skills.id')
  .join('categories', 'skills.category_id', '=', 'categories.id')
  .where('categories.name', id)
  .select('profiles.id', 'user_id as userId', 'first_name as firstName', 'last_name as lastName', 'bio', 'photo_url as photoUrl', 'location_city as locationCity', 'email', 'skills.name as skills_name', 'categories.name as cat_name', 'skills.category_id as skills_cat_id', 'categories.id as cat_id')
  .then(formatProfiles)
}

function getLocations (connection) {
  return connection('locations')
  .select('location')
}

function formatProfiles (data) {
  return _.uniqBy(data, 'id')
    .map(profile => _.omit(profile, ['cat_name', 'skills_cat_id', 'cat_id', 'skills_name']))
    .map(addCategoriesToProfile)

  function addCategoriesToProfile (profile) {
    profile.categories = _
      .uniqBy(data.filter(category => category.id === profile.id), 'cat_id')
      .map(addSkillsToCategory)
    return profile

    function addSkillsToCategory (category) {
      return {
        category: category.cat_name,
        skills: data.filter(skill => skill.skills_cat_id === category.cat_id && skill.id === profile.id)
          .map(skill => skill.skills_name)
      }
    }
  }
}
