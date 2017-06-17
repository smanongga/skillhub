import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getProfileById, getUsersProfile} from '../actions/index'

class Profile extends Component {
  componentDidMount () {
    this.props.getProfileById(this.props.match.params.id)
    this.props.getUsersProfile()
  }

  render () {
    return (
      <div className='container'>
        <div className='row spacing'>
          <div className='col-md-3'><div className='profile-photo'>{this.props.photo_url}</div></div>
          <div className='col-md-9'>
            <h2>{this.props.firstName} {this.props.lastName}</h2>
            {this.props.locationCity}<br />
            {this.props.bio}</div>
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
  console.log('this is state', state.profile[0])
  return state.profile[0]
}

function mapDispatchToProps (dispatch) {
  return {
    getProfileById: (id, cb) => {
      dispatch(getProfileById(id, cb))
    },
    getUsersProfile: (cb) => {
      dispatch(getUsersProfile(cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

  // function Profile (props) {
  //   const image = props.photoUrl
  //   return (
  //     <div className='profile-page'>
  //       <h2>This is the profile page</h2>
  //       <div className='profile-pic col-md-3'>
  //         <img src="http://via.placeholder.com/100x100" />
  //       </div>
  //       <div className='profile-details col-md-9'>
  //         <h2>John Smith</h2>
  //         <h4>Auckland, New Zealand</h4>
  //          <p>Hi, I'm John! I live in Auckland and I want to learn how to play the triangle.</p>
  //         <p>In return, I'd like to teach people how to play the guitar, I've been playing guitar for over 20 years</p>
  //       </div>
  //       <div className='col-md-6'>
  //         <h3>Skills John would like to teach</h3>
  //         <ul>
  //           <li>Guitar</li>
  //         </ul>
  //       </div>
  //       <div className='col-md-6'>
  //         <h3>Skills John would like to learn</h3>
  //         <ul>
  //           <li>Triangle</li>
  //           <li>Javascript</li>
  //         </ul>
  //       </div>
  //       <div className='feedback'>
  //         <h3>Feedback on John</h3>
  //         <p>Feedback from other users will go here</p>
  //       </div>
  //     </div>
  //   )
  // }
