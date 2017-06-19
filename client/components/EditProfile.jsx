import React from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'
import {updateProfile, addProfileToDb, getLocations} from '../actions'
import {getUsersProfile} from '../actions/index'
import {uploadImage} from '../utils/api'

class EditProfile extends React.Component {
  componentDidMount () {
    this.props.getUsersProfile()
    this.props.getLocations()
  }
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      locationCity: this.props.locationCity,
      profilePic: '',
      bio: this.props.bio,
      skillsOffered: [],
      skillsWanted: [],
      displayUpload: true,
      imageUploading: false,
      location: this.props.location || []
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
    e.preventDefault()
    this.props.history.push('/profile')
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
      <div className='edit-profile container'>
        {this.props.profile && this.props.location &&
          <div className='edit-profile-form'>
            <h2>Edit Profile</h2>
            <div className='row'>
              <div className='col-md-9'>
                <div className='row'>
                  <div className='col-md-3'><p>Username</p></div>
                  <div className='col-md-9'>
                    <p><input className='form-control' name='userName' onChange={this.handleChange} value={this.props.profile.userName} /></p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'><p>Email</p></div>
                  <div className='col-md-9'>
                    <p><input className='form-control' name='email' onChange={this.handleChange} value={this.props.profile.email} /></p>
                  </div>
                  <hr />
                </div>
                <div className='row'>
                  <div className='col-md-3'><p>First Name</p></div>
                  <div className='col-md-9'>
                    <p><input name='firstName' className='form-control' onChange={this.handleChange} placeholder={this.props.profile.firstName} /></p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'><p>Last Name</p></div>
                  <div className='col-md-9'>
                    <p><input name='lastName' className='form-control' onChange={this.handleChange} placeholder={this.props.profile.lastName} /></p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'><p>Bio</p></div>
                  <div className='col-md-9'>
                    <p><textarea name='bio' className='form-control' onChange={this.handleChange} placeholder={this.props.profile.bio}></textarea></p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'><p>Location</p></div>
                  <div className='col-md-9'>
                    <p><select name='locationCity' className='form-control' onChange={this.handleChange}>
                      {this.props.location.map((data) => {
                        return (
                          <option value={data.location}> {data.location}</option>
                        )
                      })}
                    </select></p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'><p>Skills Offered</p></div>
                  <div className='col-md-9'>
                    <p><input name='skillsOffered' className='form-control' onChange={this.handleChange} placeholder={this.props.profile.skillsOffered} /></p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'><p>Skills Wanted</p></div>
                  <div className='col-md-9'>
                    <p><input name='skillsWanted' className='form-control' onChange={this.handleChange} placeholder={this.props.profile.skillsWanted} /></p>
                  </div>
                </div>

              </div>
              <div className='col-md-3'>
                {this.state.displayUpload && <Dropzone
                  multiple={false}
                  accept='image/*'
                  onDrop={this.handleImageDrop}>
                  <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>}

                {this.state.profilePic === '' ? null :
          <div>
            <img src={this.props.profile.photoUrl} />
          </div>}
                {this.state.profilePic &&
                  <div>
                    <h4>Upload Successful</h4>
                    <img src={this.state.profilePic} />
                  </div>}
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-7'><button className='btn btn-primary' onClick={this.handleClick}>Save</button></div>
              <div className='col-md-3'></div>
            </div>
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
    },
    getLocations: () => {
      dispatch(getLocations())
    }
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    profile: state.profile[0],
    location: state.location[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
