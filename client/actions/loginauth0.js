 import request from '../utils/api'
 import AuthService from '../utils/auth0'

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

 export function login () {
   return dispatch => {
     authService.lock.on('authenticated', (authResult) => {
       authService.lock.getUserInfo(authResult.accessToken, function (error, user) {
         if (error) {
      // Handle error
           return error
         }
         console.log(authResult)
         AuthService.setUser(user)
         AuthService.setToken(authResult.idToken)
         dispatch(initProfile({authToken: AuthService.getToken()}))
         return dispatch(receiveLogin(user))
       })
     })
   }
 }

 export function initProfile (id) {
   return dispatch => {
     return request('post', '/auth', id)
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
