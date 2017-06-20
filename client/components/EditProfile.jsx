import React from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'
import {Typeahead} from 'react-bootstrap-typeahead'

import {updateProfile, addProfileToDb, getLocations, getSkills, addProfileSkillsOffered, addProfileSkillsWanted} from '../actions'
import {getUsersProfile} from '../actions/index'
import {uploadImage} from '../utils/api'

class EditProfile extends React.Component {
  componentDidMount () {
    this.props.getUsersProfile()
    this.props.getLocations()
    this.props.getSkills()
  }
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      firstName: this.props.profile.firstName,
      lastName: this.props.profile.lastName,
      email: this.props.profile.email,
      locationCity: this.props.profile.locationCity,
      profilePic: this.props.profile.profilePic,
      bio: this.props.profile.bio,
      skillsOffered: [],
      skillsWanted: [],
      displayUpload: true,
      imageUploading: false,
      location: this.props.location || [],
      skills: this.props.profile.skills || []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleImageDrop = this.handleImageDrop.bind(this)
    this.handleWantedInput = this.handleWantedInput.bind(this)
    this.handleOfferedInput = this.handleOfferedInput.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.profile && this.props.profile.id !== nextProps.profile.id) {
      this.setState({
        ...this.state,
        ...nextProps.profile
      })
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOfferedInput (e) {
    this.setState({
      skillsOffered: e
    })
  }

  handleWantedInput (e) {
    this.setState({
      skillsWanted: e
    })
  }

  handleClick (e) {
    e.preventDefault()
    this.props.history.push('/profile')
    this.props.updateProfileInStore(this.state)
    this.props.addProfileToDb(this.state)
    this.props.updateSkillsOffered(this.state.skillsOffered)
    this.props.updateSkillsWanted(this.state.skillsWanted)
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
        <form onSubmit={this.handleClick} >
          {this.props.profile && this.props.location &&
            <div className='edit-profile-form'>
              <h2>Edit Profile</h2>
              <div className='row'>
                <div className='col-md-9'>
                  <div className='row'>
                    <div className='col-md-3'><p>Email</p></div>
                    <div className='col-md-9'>
                      <p><input className='form-control' name='email' onChange={this.handleChange} value={this.state.email} required /></p>
                    </div>
                    <hr />
                  </div>
                  <div className='row'>
                    <div className='col-md-3'><p>First Name</p></div>
                    <div className='col-md-9'>
                      <p><input name='firstName' className='form-control' onChange={this.handleChange} value={this.state.firstName} required /></p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-3'><p>Last Name</p></div>
                    <div className='col-md-9'>
                      <p><input name='lastName' className='form-control' onChange={this.handleChange} value={this.state.lastName} required /></p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-3'><p>Bio</p></div>
                    <div className='col-md-9'>
                      <p><textarea name='bio' className='form-control' onChange={this.handleChange} placeholder='Tell us more about yourself' value={this.state.bio} required ></textarea></p>
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
                      <Typeahead
                        labelKey='name'
                        multiple
                        maxHeight={100}
                        onChange={this.handleOfferedInput}
                        options={this.props.skills.map((data) => {
                          return data
                        })}
                        placeholder='Choose your skills'
                        />
                    </div>
                  </div><br />
                  <div className='row'>
                    <div className='col-md-3'><p>Skills Wanted</p></div>
                    <div className='col-md-9'>
                      <Typeahead
                        labelKey='name'
                        maxHeight={100}
                        multiple
                        onChange={this.handleWantedInput}
                        options={this.props.skills.map((data) => {
                          return data
                        })}
                        placeholder='Choose your skills'
                        />
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
                  {this.state.profilePic &&
                    <div className='photo-size'>
                      <h4>Upload Successful</h4>
                      <img src={this.state.profilePic} />
                    </div>}
                </div>
              </div><br />
              <div className='row text-center'>
                <div className='col-md-2'></div>
                <div className='col-md-7'><button className='btn btn-primary btn-lg '>Save</button></div>
                <div className='col-md-3'></div>
              </div><br />
            </div>
          }
        </form>
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
    },
    getSkills: () => {
      dispatch(getSkills())
    },
    updateSkillsOffered: (skills) => {
      dispatch(addProfileSkillsOffered(skills))
    },
    updateSkillsWanted: (skills) => {
      dispatch(addProfileSkillsWanted(skills))
    }
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    profile: state.profile,
    location: state.location[0],
    skills: state.skills
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
