import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getUsersProfile} from '../actions/index'
import WaitingIndicator from './WaitingIndicator'
import Feedback from './Feedback'

class UserProfile extends Component {
  componentWillMount () {
    this.props.getUsersProfile()
  }

  render () {
    return (
      <div className='container user-profile'>
        {this.props.waiting && <WaitingIndicator />}
        <div className='row spacing'>
          <div className='col-md-4'>
            <div className='profile-photo'><img src={this.props.data.photoUrl || '/default_profile.jpg'} />
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
                <Link to='/profile/edit'><button>Edit Profile</button></Link>
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
            <Feedback pageId={this.props.data.id} redirect={this.props.history.push} userId={this.props.data.id} />
          </div>
        </div>
      </div>
    )
  }
  }

function mapStateToProps (state) {
  return {
    data: state.profile,
    waiting: state.waiting
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUsersProfile: (cb) => {
      dispatch(getUsersProfile(cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
