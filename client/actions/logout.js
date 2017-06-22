import AuthService from '../utils/auth0'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export function logoutSuccess (history) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout (history) {
  const authService = new AuthService('elBcVpwtrkufH2NWvkGQAzW1XRigLLbK',
  'meal-mate.au.auth0.com')

  return dispatch => {
    authService.logout()
    history.push('/')
    return dispatch(logoutSuccess(history))
  }
}
