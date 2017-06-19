import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/logout'

class Logout extends React.Component {

  render () {
    return (
      <a href='#' onClick={this.props.logoutUser}>Logout</a>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
