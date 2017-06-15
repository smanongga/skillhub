 import request from '../utils/api'
 import AuthService from '../utils/auth0'
 const localStorage = global.window.localStorage

 export const LOGIN_REQUEST = 'LOGIN_REQUEST'
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
 export const LOGIN_ERROR = 'LOGIN_ERROR'
 export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

 const authService = new AuthService('elBcVpwtrkufH2NWvkGQAzW1XRigLLbK',
  'meal-mate.au.auth0.com')

 export function requestLogin () {
   authService.login()
   return {
     type: LOGIN_REQUEST,
     isAuthenticated: false
   }
 }

 function receiveLogin (user) {
   return {
     type: LOGIN_SUCCESS,
     isAuthenticated: true,
     user
   }
 }

 function loginError (err) {
   return {
     type: LOGIN_ERROR,
     isFetching: false,
     isAuthenticated: false,
     err
   }
 }

// lock.on("authenticated", function(authResult) {
//   // Use the token in authResult to getUserInfo() and save it to localStorage
//   lock.getUserInfo(authResult.accessToken, function(error, profile) {
//     if (error) {
//       // Handle error
//       return;
//     }

 export function login () {
   return dispatch => {
     authService.lock.on('authenticated', (authResult) => {
       authService.lock.getUserInfo(authResult.accessToken, function (error, user) {
         console.log(user.identities[0].user_id)
         const userId = user.identities[0].user_id
         dispatch(initProfile({auth_id: userId}))
         if (error) {
      // Handle error
           return error
         }
         AuthService.setUser(user)
         AuthService.setToken(authResult.idToken)
         return dispatch(receiveLogin(user))
       })
     })
   }
 }

 export function initProfile (id) {
   return dispatch => {
     return request('post', '/profiletest', id)
    .then((response) => {
      if (!response.ok) {
        dispatch(loginError(response.body.message))
        return Promise.reject(response.body.message)
      } else {
        console.log(response.req._data)
        return response.req._data
      }
    })
   }
 }

 function logoutSuccess (profile) {
   return {
     type: LOGOUT_SUCCESS
   }
 }
 export function logout () {
   return dispatch => {
     localStorage.removeItem('id_token')
     localStorage.removeItem('user')
     return dispatch(logoutSuccess())
   }
 }
