 import request from '../utils/api'
 export const USERS_PROFILE = 'USERS_PROFILE'

 export const UPDATE_PROFILE = 'UPDATE_PROFILE'
 export const GET_PROFILE = 'GET_PROFILE'
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

 export function saveProfileById (data) {
   return {
     type: GET_PROFILE,
     data
   }
 }
 export function getProfileOfUser (data) {
   return {
     type: USERS_PROFILE,
     isFetching: false,
     data
   }
 }

 export function addProfileToDb (profile) {
   console.log(profile)
   return dispatch => {
     return request('put', '/profile/edit', profile)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        return response.req
      }
    })
   }
 }
 export function getProfileById (id, callback) {
   return dispatch => {
     request('get', `/profiles/${id}`)
    .then(res => {
      dispatch(saveProfileById(res.body.result.profile[0]))
    })
   }
 }
 export function getUsersProfile (callback) {
   return dispatch => {
     request('get', `/profile`)
     .then(res => {
       dispatch(getProfileOfUser(res.body.result[0]))
     })
   }
 }
