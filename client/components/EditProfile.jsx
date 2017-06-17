import React from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'

import {updateProfile, addProfileToDb} from '../actions'
import {getUsersProfile} from '../actions/index'
import {uploadImage} from '../utils/api'

class EditProfile extends React.Component {
  componentDidMount () {
    this.props.getUsersProfile()
  }
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      password: '',
      locationCity: this.props.location,
      profilePic: '',
      bio: this.props.bio,
      skillsOffered: [],
      skillsWanted: [],
      displayUpload: true,
      imageUploading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleImageDrop = this.handleImageDrop.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    this.props.updateProfileInStore(this.state)
    this.props.addProfileToDb(this.state)
  }

  handleImageDrop (files) {
    this.setState({imageUploading: true})
    uploadImage(files[0], (err, res) => {
      if (err) return this.props.imageError(err.message)
      this.setState({
        profilePic: res,
        displayUpload: false,
        imageUploading: false
      })
    })
  }

  render () {
    return (
      <div className='edit-profile'>
        {this.props.profile &&
        <div className='edit-profile-form'>
          <h2>Edit Profile</h2>
          <p>User Name <input name='userName' onChange={this.handleChange} value={this.props.profile.userName} /></p>
          <p>First Name <input name='firstName' onChange={this.handleChange} placeholder={this.props.profile.firstName} /></p>
          <p>Last Name <input name='lastName' onChange={this.handleChange} placeholder={this.props.profile.lastName} /></p>
          <p>Email <input name='email' onChange={this.handleChange} value={this.props.profile.email} /></p>
          <p>Bio <input name='bio' onChange={this.handleChange} placeholder={this.props.profile.bio} /></p>
          <p>Location <input name='location' onChange={this.handleChange} placeholder={this.props.profile.location} /></p>
          <p>Skills Offered <input name='skillsOffered' onChange={this.handleChange} placeholder={this.props.profile.skillsOffered} /></p>
          <p>Skills Wanted <input name='skillsWanted' onChange={this.handleChange} placeholder={this.props.profile.skillsWanted} /></p>
          {this.state.displayUpload && <Dropzone
            multiple={false}
            accept='image/*'
            onDrop={this.handleImageDrop}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>}
            {this.state.profilePic &&
            <div>
              <h4>Upload Successful</h4>
              <img src={this.state.profilePic} />
            </div>}
          <p><button onClick={this.handleClick}>Save</button></p>
        </div>
        }
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUsersProfile: (cb) => {
      dispatch(getUsersProfile(cb))
    },
    addProfileToDb: (profile) => {
      dispatch(addProfileToDb(profile))
    },
    updateProfileInStore: (profile) => {
      dispatch(updateProfile(profile))
    }
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    profile: state.profile[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
