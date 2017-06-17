import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions/logout'

const Logout = (props) => {
  return (
    <a href='#' onClick={props.logoutUser}>
      Logout
    </a>
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
