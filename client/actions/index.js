// import {getAllCategories} from '../utils/api'
 import request from '../utils/api'

 export const USERS_PROFILE = 'USERS_PROFILE'
 export const UPDATE_PROFILE = 'UPDATE_PROFILE'
 export const GET_PROFILE = 'GET_PROFILE'
 export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
 export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
 export const RECEIVE_CATEGORY_USERS_LEARN = 'RECEIVE_CATEGORY_USERS_LEARN'
 export const RECEIVE_CATEGORY_USERS_OFFER = 'RECEIVE_CATEGORY_USERS_OFFER'
 export const GET_LOCATION = 'GET_LOCATIONS'
 export const PUSHED_SENDER_ID = 'PUSHED_SENDER_ID'
 export const GET_SKILLS = 'GET_SKILLS'
 export const ERROR_MESSAGE = 'ERROR_MESSAGE'

 export function error (message) {
   return {
     type: ERROR_MESSAGE,
     errorMessage: message
   }
 }

 export function updateProfile (text) {
   return {
     type: UPDATE_PROFILE,
     updatedProfile: {
       userName: '',
       firstName: text.firstName,
       lastName: text.lastName,
       email: '',
       photoUrl: text.profilePic,
       locationCity: text.locationCity,
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

 export const receiveCategoryUsersLearn = (categoryUsersLearn) => {
   return {
     type: RECEIVE_CATEGORY_USERS_LEARN,
     categoryUsersLearn: categoryUsersLearn
   }
 }
 export const receiveCategoryUsersOffer = (categoryUsersOffer) => {
   return {
     type: RECEIVE_CATEGORY_USERS_OFFER,
     categoryUsersOffer: categoryUsersOffer
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

 export function locations (location) {
   return {
     type: GET_LOCATION,
     location
   }
 }

 export function skills (skills) {
   return {
     type: GET_SKILLS,
     skills
   }
 }

 export function addProfileToDb (profile) {
   return dispatch => {
     return request('put', '/profile/edit', profile)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        return response.req
      }
    })
    .catch((err) => {
      return dispatch(error(err.response.body.message))
    })
   }
 }

 export function addProfileSkillsOffered (skills) {
   return dispatch => {
     return request('post', '/profile/skills-offered', skills)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        return response.req
      }
    })
    .catch((err) => {
      return dispatch(error(err.response.body.message))
    })
   }
 }

 export function addProfileSkillsWanted (skills) {
   return dispatch => {
     return request('post', '/profile/skills-learn', skills)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        return response.req
      }
    })
    .catch((err) => {
      return dispatch(error(err.response.body.message))
    })
   }
 }

 export function mapSenderId (senderId) {
   return dispatch => {
     dispatch(pushedSenderId(senderId))
   }
 }

 function pushedSenderId (senderId) {
   return {
     type: PUSHED_SENDER_ID,
     senderId
   }
 }

 export const fetchCategories = () => {
   return (dispatch, getState) => {
     const state = getState()
     if (state.categories.length === 0) {
       getAllCategories((err, res) => {
         if (err) return dispatch(error(err.message))
         dispatch(receiveCategories(res.result))
       })
     }
   }
 }

 export function getProfileById (id, callback) {
   return dispatch => {
     request('get', `/profiles/${id}`)
    .then(res => {
      dispatch(saveProfileById(res.body.result))
    })
    .catch((err) => {
      return dispatch(error(err.response.body.result))
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
     .catch((err) => {
       return dispatch(error(err.response.body.result))
     })
   }
 }

 export function getUsersProfile (callback) {
   return dispatch => {
     request('get', `/profile`)
     .then(res => {
       dispatch(getProfileOfUser(res.body.result))
     })
     .catch((err) => {
       return dispatch(error(err.response.body.result))
     })
   }
 }

 export function getCategoryUsersLearn (id, callback) {
   return dispatch => {
     request('get', `/learn/${id}`)
     .then(res => {
       dispatch(receiveCategoryUsersLearn(res.body.result))
     })
     .catch((err) => {
       return dispatch(error(err.response.body.result))
     })
   }
 }

 export function getCategoryUsersOffer (id, callback) {
   return dispatch => {
     request('get', `/offer/${id}`)
     .then(res => {
       dispatch(receiveCategoryUsersOffer(res.body.result))
     })
     .catch((err) => {
       return dispatch(error(err.response.body.result))
     })
   }
 }

 export function getLocations () {
   return dispatch => {
     request('get', '/profile/edit')
    .then(res => {
      dispatch(locations(res.body.result))
    })
    .catch((err) => {
      return dispatch(error(err.response.body.result))
    })
   }
 }

 export function getSkills () {
   return dispatch => {
     request('get', '/profile/edit/skills')
    .then(res => {
      dispatch(skills(res.body.result))
    })
    .catch((err) => {
      return dispatch(error(err.response.body.result))
    })
   }
 }
