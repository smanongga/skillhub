import React from 'react'
import {connect} from 'react-redux'
// import {Redirect} from 'react-router'

import {updateProfile} from '../actions'

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: 'Julie',
      firstName: '',
      lastName: '',
      email: 'julie.crutchley@outlook.com',
      password: '',
      profilePic: '',
      location: '',
      bio: '',
      skillsOffered: [],
      skillsWanted: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    // this.redirectToProfilePage = this.redirectToProfilePage.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    this.props.updateProfile()  
  }

  render () {
    return (
      <div className='edit-profile'>
        <div className='edit-profile-form'>
          <h2>Edit Profile</h2>
          <p>First Name <input name='firstName' onChange={this.handleChange} value={this.state.firstName} /></p>
          <p>Last Name <input name='lastName' onChange={this.handleChange} value={this.state.lastName} /></p>
          <p>Email <input name='email' onChange={this.handleChange} value={this.state.email} /></p>
          <p>Bio <input name='bio' onChange={this.handleChange} value={this.state.Bio} /></p>
          <p>Profile Pic <input name='photoUrl' onChange={this.handleChange} value={this.state.photoUrl} /></p>
          <p>Location <input name='location' onChange={this.handleChange} value={this.state.location} /></p>
          <p>Skills Offered <input name='skillsOffered' onChange={this.handleChange} value={this.state.skillsOffered} /></p>
          <p>Skills Wanted <input name='skillsWanted' onChange={this.handleChange} value={this.state.skillsWanted} /></p>
          <p><button onClick={this.handleClick}>Save</button></p>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
    updateProfile: () => {
      dispatch(updateProfile())
    }
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)