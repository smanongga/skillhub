import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getProfileById, getUsersProfile, mapSenderId} from '../actions/index'

class Profile extends Component {
  componentDidMount () {
    this.props.getProfileById(this.props.match.params.id)
  }
  
  handleContactClick (event) {
    const senderId = this.props.match.params.id
    this.props.mapSenderId(senderId)
    this.props.history.push('/contact')
  }

  render () {
    return (
      <div className='container'>
        <div className='row spacing'>
          <div className='col-md-4'><div className='profile-photo'><img src='/defaultProfile.jpg' /></div></div>
          <div className='col-md-8'>
            <h2>{this.props.firstName} {this.props.lastName}</h2>
            <button onClick={(e) => this.handleContactClick(e)}>
            Contact me
            </button>
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
  return state.profile[0]
}

function mapDispatchToProps (dispatch) {
  return {

    getProfileById: (id, cb) => {
      dispatch(getProfileById(id, cb))
    },
    getUsersProfile: (cb) => {
      dispatch(getUsersProfile(cb))
    },
    mapSenderId: (senderId) => dispatch(mapSenderId(senderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
