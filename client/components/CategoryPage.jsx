import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCategoryUsersLearn, getCategoryUsersOffer, getLocations} from '../actions/index'

class CategoryPage extends Component {
  componentDidMount () {
    this.props.getLocations()
    this.props.getUsersLearn(this.props.match.params.id)
    this.props.getUsersOffer(this.props.match.params.id)
  }
  constructor (props) {
    super(props)
    this.state = {
      location: 'Auckland'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const filterLearnByLocation = this.props.UsersLearn.filter((user) => {
      return user.locationCity === this.state.location
    })
    const filterOfferByLocation = this.props.UsersOffer.filter((user) => {
      return user.locationCity === this.state.location
    })
    return (
      <div className='container page'>
        <h1 className='title'>{this.props.match.params.id}</h1>
        <form>
          {this.props.location &&
            <p><select name='location' className='form-control' onChange={this.handleChange}>
              {this.props.location.map((data, i) => {
                return (
                  <option value={data.location}> {data.location}</option>
                )
              })}
            </select></p>
          }
        </form>
        <div>
          <h2>To Learn</h2>
          <div className='flex-container'>{filterLearnByLocation.map((user, i) => {
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
        <div className='flex-container'>{filterOfferByLocation.map((user, i) => {
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
    UsersOffer: state.categoryUsersOffer,
    location: state.location[0]
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUsersLearn: (cb) => {
      dispatch(getCategoryUsersLearn(cb))
    },
    getUsersOffer: (cb) => {
      dispatch(getCategoryUsersOffer(cb))
    },
    getLocations: () => {
      dispatch(getLocations())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
