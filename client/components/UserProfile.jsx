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
      <div className='container'>
        <div className='row spacing'>
          <div className='col-md-4'><div className='profile-photo'><img src={this.props.photoUrl} /></div></div>
          <div className='col-md-8'>
            <h2>{this.props.firstName} {this.props.lastName}</h2>
            {this.props.locationCity}<br />
            {this.props.bio}</div>
          <Link to='/profile/edit'><button>Edit Profile</button></Link>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to teach</h2>
          </div>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to learn</h2></div>
        </div>
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
