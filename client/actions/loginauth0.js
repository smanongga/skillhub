 import request from '../utils/api'
 import AuthService from '../utils/auth0'

 export const LOGIN_REQUEST = 'LOGIN_REQUEST'
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
 export const LOGIN_ERROR = 'LOGIN_ERROR'
 export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

 export function requestLogin () {
   const authService = new AuthService('elBcVpwtrkufH2NWvkGQAzW1XRigLLbK',
  'meal-mate.au.auth0.com')
   authService.login()
   return {
     type: LOGIN_REQUEST,
     isAuthenticated: false
   }
 }

 export function receiveLogin (user, firstLogin) {
   return {
     type: LOGIN_SUCCESS,
     isAuthenticated: true,
     firstLogin,
     user
   }
 }

 export function loginError (err) {
   return {
     type: LOGIN_ERROR,
     isFetching: false,
     isAuthenticated: false,
     err
   }
 }

 export function login () {
   const authService = new AuthService('elBcVpwtrkufH2NWvkGQAzW1XRigLLbK',
    'meal-mate.au.auth0.com')
   return dispatch => {
     authService.lock.on('authenticated', (authResult) => {
       authService.lock.getUserInfo(authResult.accessToken, function (error, user) {
         if (error) {
      // Handle error
           dispatch(loginError(error))
         }
         AuthService.setUser(user)
         AuthService.setToken(authResult.idToken)
         return dispatch(initProfile({authToken: AuthService.getToken(), user: user.username, email: user.email}, user))
       })
     })
   }
 }

 export function initProfile (token, user) {
   return dispatch => {
     return request('post', '/auth', token, user.username, user.email)
    .then((response) => {
      if (!response.ok) {
        dispatch(loginError(response.body.message))
        return Promise.reject(response.body.message)
      } else {
        dispatch(receiveLogin(user, response.body.firstLogin))
      }
    })
   }
 }
