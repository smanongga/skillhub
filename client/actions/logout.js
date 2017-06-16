
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

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
