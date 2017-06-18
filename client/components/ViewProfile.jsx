import {getProfileById} from '../actions/index'
import React, {Component} from 'react'
import {connect} from 'react-redux'

class ViewProfile extends Component {

  componentDidMount () {
    this.props.fetchProfileById(this.props.match.params.id)
  }

  render () {
    console.log('This is props', this.props.data)
    return (
       <div className='container'>
         <div className='row spacing'>
          <div className='col-md-4'><div className='profile-photo'><img src='/defaultProfile.jpg' /></div></div>
          <div className='col-md-8'>
            <h2>{this.props.data.firstName} {this.props.data.lastName}</h2>
            {this.props.data.locationCity}<br />
            {this.props.data.bio}</div>
        </div>
        <div className='row spacing'>


          <div className='col-md-12 white-box'><h2>Skills I want to teach</h2>
          <ul className='tags'>

          {this.props.data.learn.map((skill, i) => {
            return (
              <li>{skill}</li>
            )
          })}
        </ul>
      </div>
        </div>
        <div className='row spacing'>
          <div className='col-md-12 white-box'><h2>Skills I want to learn</h2></div>
          <ul className='tags'>
          {this.props.data.teach.map(skill => {
            return (
              <li>{skill}</li>
            )
          })}
        </ul>
      </div>

    </div>
    )
  }
  }

function mapStateToProps (state) {
  return {
    data: state.viewProfile[0]
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchProfileById: (id, cb) => {
      dispatch(getProfileById(id, cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)
