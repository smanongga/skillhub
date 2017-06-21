import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router'
import {getProfileById, mapSenderId} from '../actions/index'
import WaitingIndicator from './WaitingIndicator'
import SignUp from './SignUp'
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
      <div>
      { this.props.isAuthenticated &&
      <div className='container user-profile'>
        <div className='row spacing'>
          <div className='col-md-4'>
            <div className='profile-photo'><img src={this.props.data.photoUrl} />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-11'>
                <h2 className='title'>{this.props.data.firstName} {this.props.data.lastName} </h2>
                <div className='location'>
                  {this.props.data.locationCity}
                </div>
                <div className='bio'>
                  {this.props.data.bio}
                </div>
                <button className='btn btn-primary btn-sm' onClick={(e) => this.handleContactClick(e)}>Contact me</button>
              </div>
            </div>
          </div>
        </div>
        <div className='row skills spacing'>
          <div className='col-md-5'><h2 className='title'>Skills I want to learn</h2>
            <div className='content-right'>
              <ul className='bootstrap-tokenizer'>
                {this.props.data.learn.map((skill, i) => {
                  return (
                    <li className={`token ${skill.categoryName}`} key={i}>{skill.name} </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='col-md-5'><h2 className='title'>Skills I want to teach</h2>
            <div className='content'>
              <ul className='bootstrap-tokenizer'>
                {this.props.data.teach.map((skill, i) => {
                  return (
                    <li className={`token ${skill.categoryName}`} key={i}>{skill.name} </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='row feedbacks spacing'>
          <div className='col-md-12'>
            <Feedback pageId={this.props.match.params.id} redirect={this.props.history.push} />
          </div>
        </div>
      </div>
    }
        {!this.props.isAuthenticated &&
        <div className='container login'>
          <center>
        Please sign up
      <Route path='/' component={SignUp} />
          </center>
        </div>
    }
      </div>
    )
  }
  }

function mapStateToProps (state) {
  return {
    data: state.viewProfile,
    waiting: state.waiting,
    isAuthenticated: state.auth.isAuthenticated

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
