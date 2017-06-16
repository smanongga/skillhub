 import request from '../utils/api'
 import AuthService from '../utils/auth0'

 export const LOGIN_REQUEST = 'LOGIN_REQUEST'
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
 export const LOGIN_ERROR = 'LOGIN_ERROR'
 export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

 const authService = new AuthService('elBcVpwtrkufH2NWvkGQAzW1XRigLLbK',
  'meal-mate.au.auth0.com')

 export function requestLogin (cb) {
   authService.login(cb)
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

 export function login (cb) {
   return dispatch => {
     authService.lock.on('authenticated', (authResult) => {
       authService.lock.getUserInfo(authResult.accessToken, function (error, user) {
         if (error) {
      // Handle error
           return error
         }
         AuthService.setUser(user)
         AuthService.setToken(authResult.idToken)
         return dispatch(initProfile({authToken: AuthService.getToken()}, user, cb))
       })
     })
   }
 }

 export function initProfile (token, user, cb) {
   return dispatch => {
     return request('post', '/auth', token)
    .then((response) => {
      if (!response.ok) {
        dispatch(loginError(response.body.message))
        return Promise.reject(response.body.message)
      } else {
        dispatch(receiveLogin(user))
        const firstLogin = response.body.firstLogin
        cb(null, firstLogin)
      }
    })
   }
 }
