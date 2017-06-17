import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsersProfile} from '../actions/index'
import {Link} from 'react-router-dom'

class UserProfile extends Component {
  componentDidMount () {
    this.props.getUsersProfile()
  }

  render () {
    return (
      <div>
        <h3>Name: {this.props.firstName} {this.props.lastName} </h3>
        <h3>Bio: {this.props.bio}</h3>
        <h3>Location: {this.props.locationCity}</h3>
        <Link to='/profile/edit'><button>Edit Profile</button></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state.profile[0]
}

function mapDispatchToProps (dispatch) {
  return {
    getUsersProfile: (cb) => {
      dispatch(getUsersProfile(cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
