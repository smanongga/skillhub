
export const UPDATE_PROFILE = 'UPDATE_PROFILE'

export function updateProfile () {
  return function (dispatch) {

  }
}

export const fetchImages = () => {
  return (dispatch, getState) => {
    dispatch(waitingIndicator())
    const state = getState()
    if (state.images.length === 0) {
      getAllImages((err, res) => {
        if (err) return dispatch(error(err.message))
        dispatch(receiveImages(res.result))
        dispatch(notWaiting())
      })
    }
  }
}
