 import request from '../utils/api'

 export const UPDATE_PROFILE = 'UPDATE_PROFILE'

export function updateProfile (text) {
  return {
    type: UPDATE_PROFILE,
    updatedProfile: {
      userName: '',
      firstName: text.firstName,
      lastName: text.lastName,
      email: '',
      photoUrl: text.profilePic,
      location: text.location,
      bio: text.bio,
      skillsOffered: text.skillsOffered,
      skillsWanted: text.skillsWanted
    }
  }
}

 export function addProfileToDb (profile) {
   return dispatch => {
     return request('post', '/profile/edit', profile)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        return response.req
      }
    })
   }
 }
