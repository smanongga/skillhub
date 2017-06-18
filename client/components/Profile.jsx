import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getProfileById, getUsersProfile, mapSenderId} from '../actions/index'

class Profile extends Component {

  componentWillMount () {
    this.props.getProfileById(this.props.match.params.id)
  }

  handleContactClick (event) {
    const senderId = this.props.match.params.id
    this.props.mapSenderId(senderId)
    this.props.history.push('/contact')
  }

  render () {
    // console.log('This is props', this.props.data)
    return (
      <div className='container'>
        <div className='row spacing'>
          <div className='col-md-4'><div className='profile-photo'><img src='/defaultProfile.jpg' /></div></div>
          <div className='col-md-8'>
            <h2>{this.props.data.firstName} {this.props.data.lastName}</h2>
            {this.props.data.locationCity}<br />
            {this.props.data.bio}</div>
          <h2>{this.props.firstName} {this.props.lastName}</h2>
          <button onClick={(e) => this.handleContactClick(e)}>
              Contact me
            </button>
          {this.props.locationCity}<br />
          {this.props.bio}</div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to teach</h2>
            <ul>
              {this.props.data.map((skill, i) => {
                return (
                    console.log('list skill', skill.name)
                )
              })}
            </ul>
          </div>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to learn</h2></div>
          <ul>
            {/* {this.props.data.teach.map(skill => {
                return (
                <li>{skill}</li>
              )
            })} */}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.viewProfile
  }
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
