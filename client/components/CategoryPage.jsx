import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategoryUsersLearn, getCategoryUsersOffer} from '../actions/index'
import {Link} from 'react-router-dom'

class CategoryPage extends Component {
  componentDidMount () {
    this.props.getUsersLearn(this.props.match.params.id)
    this.props.getUsersOffer(this.props.match.params.id)
  }

  render () {
    console.log(this.props.UsersLearn)
    return (
      <div className='container'>
        <div><h2>To Learn</h2>
          <div className='flex-container'>{this.props.UsersLearn.map((user, i) => {
            return (
              <div className='profile-thumbnail'>
                <Link to={`/profiles/${user.id}`}key={i}>
                  <div>
                    <div className='photo'><img src='/defaultProfile.jpg' /></div>
                    <div className='user-details'>
                      <ul>
                        <li>{user.firstName}</li>
                        <li>{user.categories[0].skills}</li>
                      </ul>
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
              <Link to={`/profiles/${user.id}`}key={i}>
                <div>
                  <div className='photo'><img src='/defaultProfile.jpg' /></div>
                  <div className='user-details'>
                    <ul>
                      <li>{user.firstName}</li>
                      <li>{user.categories[0].skills}</li>
                    </ul>
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
