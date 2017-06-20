import { authService } from '../utils/auth0'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function logoutSuccess (history) {
  return {
    type: LOGOUT_SUCCESS
  }
}

// instead of doing a push directly here, might want to return a promise (or callback)
export function logout (history) {
  return dispatch => {
    authService.logout()
    history.push('/')
    return dispatch(logoutSuccess(history))
  }
}
