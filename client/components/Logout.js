import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions/logout'

const Logout = (props) => {
  return (
    <button onClick={props.logoutUser}>
      Logout
    </button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
