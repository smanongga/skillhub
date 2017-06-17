 // import {getAllCategories} from '../utils/api'
 import request from '../utils/api'

 export const USERS_PROFILE = 'USERS_PROFILE'
 export const UPDATE_PROFILE = 'UPDATE_PROFILE'
 export const GET_PROFILE = 'GET_PROFILE'
 export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
 export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

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
 export const requestCategories = () => {
   return {
     type: REQUEST_CATEGORIES
   }
 }

 export const receiveCategories = (categories) => {
   return {
     type: RECEIVE_CATEGORIES,
     categories: categories
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
     data
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

 export const fetchCategories = () => {
   return (dispatch, getState) => {
     const state = getState()
     if (state.categories.length === 0) {
       getAllCategories((err, res) => {
         if (err) return console.log(err)
         dispatch(receiveCategories(res.result))
       })
     }
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

 export function getAllCategories (callback) {
   return dispatch => {
     request('get', '/categories')
     .then(res => {
       dispatch(receiveCategories(res.body.result)
     )
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
