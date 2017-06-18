
import AuthService from '../utils/auth0'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

const authService = new AuthService('elBcVpwtrkufH2NWvkGQAzW1XRigLLbK',
  'meal-mate.au.auth0.com')

function logoutSuccess (profile) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout (history) {
  return dispatch => {
    authService.logout()
    return dispatch(logoutSuccess())
  }
}
