import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions/logout'

class Logout extends React.Component {
  handleClick (e) {
    this.props.logoutUser(this.props.history.push('/'))
  }

  render () {
    return (
      <a href='' onClick={(e) => this.handleClick(e)}>
      Logout
    </a>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (history) => {
      dispatch(logout(history))
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
