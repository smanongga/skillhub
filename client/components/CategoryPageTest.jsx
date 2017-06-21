import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCategoryUsersLearn, getCategoryUsersOffer} from '../actions/index'

class CategoryPage extends Component {
  componentDidMount () {
    this.props.getUsersLearn(this.props.match.params.id)
    this.props.getUsersOffer(this.props.match.params.id)
  }

  render () {
    return (
      <div className='container'>
        <h1 className='title'>{this.props.match.params.id}</h1>
        <div><h2>To Learn</h2>
          <div className='flex-container'>{this.props.UsersLearn.map((user, i) => {
            return (
              <div className='profile-thumbnail'>
                <Link to={`/profiles/${user.id}`} key={i}>
                  <div>
                    <div className='user-details'>
                      {user.firstName} {user.lastName}
                    </div>
                    <div className='photo'><img src={user.photoUrl} /></div>
                    <div className='bootstrap-tokenizer'>
                        {user.categories[0].skills.map(skill => {
                          return (
                            <span className='token'>{skill}</span>
                          )
                        })}
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
          </div>
        </div>
        <div className='clear-box'><h2>To Offer</h2></div>
        <div className='flex-container'>{this.props.UsersOffer.map((user, i) => {
          return (
            <div className='profile-thumbnail'>
              <Link to={`/profiles/${user.id}`} key={i}>
                <div>
                  <div className='user-details'>
                    {user.firstName} {user.lastName}
                  </div>
                  <div className='photo'><img src={user.photoUrl} /></div>
                  <div className='bootstrap-tokenizer'>
                      {user.categories[0].skills.map(skill => {
                        return (
                          <span className='token'>{skill}</span>
                        )
                      })}
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    UsersLearn: state.categoryUsersLearn,
    UsersOffer: state.categoryUsersOffer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUsersLearn: (cb) => {
      dispatch(getCategoryUsersLearn(cb))
    },
    getUsersOffer: (cb) => {
      dispatch(getCategoryUsersOffer(cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
