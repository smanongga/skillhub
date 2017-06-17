import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getCategoryUsersLearn, getCategoryUsersOffers} from '../actions'

class CategoryPage extends React.Component {
  componentDidMount () {
    this.props.fetchCategoryUsersLearn()
    this.props.fetchCategoryUsersOffers()
  }
  render () {
    return(
      <div>
        <h1>{this.props.match.params.id}</h1>
        <div><h2>To Learn</h2>
            <div>
              {this.props.userWantsToLearn.map((user, i) => {
                return (
                  <Link to={`/profile/${id}`} key={i}><div className='category-thumbnail col-md-3'>
                  //   {user.firstName}
                  // </div></Link>
                )
              })}
            </div>
        </div>
        <div><h2>To Offer</h2></div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  console.log(dispatch)
  return {
    fetchCategoryUsersLearn: (cb) => {
      dispatch(getCategoryUsersLearn)
    },
    fetchCategoryUsersOffers: (cb) => {
      dispatch(getCategoryUsersOffers)
    }
  }
}

function mapStateToProps (state) {

console.log(state)
  return {
    userWantsToLearn: state.categoryUsersLearn,
    userWantsToOffer: state.categoryUsersOffer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
