import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategoryUsersLearn} from '../actions/index'
import {Link} from 'react-router-dom'

class CategoryPage extends Component {
  componentDidMount () {
    this.props.getUsersLearn()
  }

  render () {
    console.log(this.props.UsersLearn)
    return (
      <div>
        <h3>Name: {this.props.firstName} {this.props.lastName} </h3>
        <h3>Bio: {this.props.bio}</h3>
        <h3>Location: {this.props.locationCity}</h3>
        <Link to='/profile/edit'><button>Edit Profile</button></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
   UsersLearn: state.categoryUsersLearn
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUsersLearn: (cb) => {
      dispatch(getCategoryUsersLearn(cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
