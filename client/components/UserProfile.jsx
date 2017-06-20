import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsersProfile} from '../actions/index'
import {Link} from 'react-router-dom'
import WaitingIndicator from './WaitingIndicator'

class UserProfile extends Component {
  componentWillMount () {
    this.props.getUsersProfile()
  }

  render () {
    console.log(this.props.data.learn)
    return (
      <div className='container'>
        {this.props.waiting && <WaitingIndicator />}
        <div className='row spacing'>
          <div className='col-md-4'><div className='profile-photo'><img src={this.props.data.photoUrl} /></div></div>
          <div className='col-md-8'>
            <h2>{this.props.data.firstName} {this.props.data.lastName}</h2>
            {this.props.data.locationCity}<br />
            {this.props.data.bio}</div>
          <Link to='/profile/edit'><button>Edit Profile</button></Link>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to teach</h2>
            <ul className='bootstrap-tokenizer'>
              {this.props.data.learn.map((skill, i) => {
                return (
                  <li className='token' key={i}>{skill.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to learn</h2>
            <ul className='bootstrap-tokenizer'>
              {this.props.data.teach.map((skill, i) => {
                return (
                  <li className='token' key={i}>{skill.name}</li>
                )
              })}
            </ul>
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
