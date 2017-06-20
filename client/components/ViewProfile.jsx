import {getProfileById, mapSenderId} from '../actions/index'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import WaitingIndicator from './WaitingIndicator'

import Feedback from './Feedback'

class ViewProfile extends Component {

  componentWillMount () {
    this.props.fetchProfileById(this.props.match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    const oldId = this.props.match.params.id
    const newId = nextProps.match.params.id
    if (newId !== oldId) {
      this.props.fetchProfileById(newId)
    }
  }

  handleContactClick (event) {
    const senderId = this.props.match.params.id
    this.props.mapSenderId(senderId)
    this.props.history.push('/contact')
  }

  render () {
    return (
      <div className='container'>
         {this.props.waiting && <WaitingIndicator />}
        <div className='row spacing'>
          <div className='col-md-4'>
            <div className='profile-photo'><img src={this.props.data.photoUrl} />
            </div>

          </div>
          <div className='col-md-8'>
            <h2>{this.props.data.firstName} {this.props.data.lastName} <button className='btn btn-primary btn-sm' onClick={(e) => this.handleContactClick(e)}>Contact me</button></h2>
            {this.props.data.locationCity}<br />
            {this.props.data.bio}</div>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to teach</h2>
            <ul className='tags'>
              {this.props.data.learn.map((skill, i) => {
                return (
                  <li key={i}>{skill.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to learn</h2>
            <ul className='tags'>
              {this.props.data.teach.map((skill, i) => {
                return (
                  <li key={i}>{skill.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Feedback</h2></div>
          <Feedback pageId={this.props.match.params.id} redirect={this.props.history.push} />
        </div>
      </div>
    )
  }
  }

function mapStateToProps (state) {
  return {
    data: state.viewProfile,
    waiting: state.waiting

  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchProfileById: (id, cb) => {
      dispatch(getProfileById(id, cb))
    },
    mapSenderId: (senderId) => dispatch(mapSenderId(senderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)
